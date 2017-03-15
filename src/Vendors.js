import React, { Component } from 'react';
import { ListView } from 'react-native';
import Rebase from 're-base';
import config from './lib/config';
import List from './List';
import { Spinner } from './common';
import { sortBy } from './helpers/sorted';

const base = Rebase.createClass(config);

class Vendors extends Component {
  static renderRow(rowData) {
    return (
      <List vendor={rowData} />
    );
  }

  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: this.ds,
      data: null,
      isLoading: false,
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    this.setState({ isLoading: true });
    base.fetch('vendors', {
      context: this,
      asArray: true,
    }).then((data) => {
      const sortedData = sortBy(data, 'distance');
      this.setState({
        data: sortedData,
        isLoading: false,
        dataSource: this.ds.cloneWithRows(sortedData),
      });
    }).catch(() => {
      this.setState({ isLoading: false });
    });
  }


  render() {
    const { isLoading, dataSource } = this.state;

    return !isLoading ?
      <ListView
        dataSource={dataSource}
        renderRow={rowData => Vendors.renderRow(rowData)}
      />
        : <Spinner />;
  }
}
export default Vendors;

import Rebase from 're-base';
import config from './config';

const base = Rebase.createClass(config);

export function fetchData(lib, context) {
  base.fetch(lib, {
    context,
    asArray: true,
  });
}

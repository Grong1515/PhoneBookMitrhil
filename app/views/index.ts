import m from 'mithril';

import { wrap } from '../helpers';

import Layout from './layout';

import Main from './home';

export default {
  '/': wrap(Layout, Main),
}

if (module.hot) {
  module.hot.accept();
  module.hot.dispose(function() {
  });
}

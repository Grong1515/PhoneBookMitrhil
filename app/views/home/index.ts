import m from 'mithril';
import phoneBook from '../phoneBook'

export default {
  view: function (vnode: m.Vnode) {
    return m('div.columns', [
      m(phoneBook)
    ]);
  }
}
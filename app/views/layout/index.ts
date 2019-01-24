import m from 'mithril';

// import menu from '../menu';

const c: m.Component = {
  view: function ({children}) {
    return m('.layout', [
      // m(menu),
      children
    ]);
  }
}

export default c
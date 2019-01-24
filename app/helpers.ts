import m from 'mithril';

export function wrap (node: m.Component, child: m.ComponentTypes) {
  return {
    render: function () {
      return m(node, m(child));
    }
  }
}

export function autobind(a: object | null) {
  return function (target: () => any, propertyKey: string, descriptor: PropertyDescriptor) {
      target.bind(a)
  };
}
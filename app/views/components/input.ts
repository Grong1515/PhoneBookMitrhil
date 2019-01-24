import m from 'mithril'

interface Attrs {
  name: string,
  error?: boolean,
  oninput: (a: string) => void,
  value: string | number
}
interface State {
  id: string
}

const input: m.Component<Attrs,State> = {
  oninit (vnode) {
    vnode.state = {id: (+new Date).toString(36)}
  },
  view ({attrs: {name, oninput, value, error = false}, state: {id}}) {
    return m('.form-group', {
      class: [error && 'has-error'].join(' ')
    }, [
      m('label.form-label', {for: id}, name),
      m('input.form-input', {
        id,
        value,
        placeholder: name,
        oninput: m.withAttr("value", oninput)
      })
    ])
  }
}

export default input
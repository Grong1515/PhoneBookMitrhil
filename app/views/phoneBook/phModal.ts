import m from 'mithril'
import modal from '../modal'
import input from '../components/input'

import {PhoneEntity} from '../../types/PhoneBook'

interface Attrs {
  title: string,
  open: boolean,
  item: PhoneEntity,
  onsubmit: () => void,
  onclose: () => void,
}

interface State extends PhoneEntity {
  [key: string]: string
}

function phModal(): m.Component<Attrs,State> {
  let state: State;
  let errors = 0;
  function getInputHandler(name:string) {
    return function oninput(value: string): void {
      state[name] = value
    }
  }

  function emailValidity (v: string) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(v).toLowerCase())
  }
  function phoneValidity (v: string) {
    var re = /^[\+]?[(]?[0-9]{1,3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    return re.test(String(v).toLowerCase())
  }
  function checkValidity (type: string , v: string) {
    switch (type) {
      case 'Email':
        return emailValidity(v)
      case 'Phone':
        return phoneValidity(v)
      default:
        return true
    }
  }

  return {
    oninit (vnode) {
      state = vnode.attrs.item ? vnode.attrs.item as State : {name: '', phone: '', email: '', id: ''}
    },
    view ({attrs: {title, open = false, onsubmit, onclose}}) {
      errors = 0;
      return m(modal, {title, open, small: true, onclose}, [
        m('.modal-body',
          ['Name', 'Phone', 'Email'].map((el: string) => {
            errors += +!checkValidity(el, state[el.toLowerCase()])
            return m(input, {
              name: el,
              error: state[el.toLowerCase()] && !checkValidity(el, state[el.toLowerCase()]),
              value: state[el.toLowerCase()],
              oninput: getInputHandler(el.toLowerCase())
            })
          })
        ),
        m('.modal-footer', [
          m('button.btn.btn-primary', {type: 'button', onclick: function () {if (!errors) onsubmit(); else return false;}}, 'Save'),
          m('button.btn.btn-link', {type: 'button', onclick: onclose}, 'Close')
        ])
      ])
    }
  }
}

export default phModal
import m from 'mithril'

import {PhoneEntity} from '../../types/PhoneBook'

interface Attrs {
  onclick (): void,
  handleRemove (): void,
  data: PhoneEntity
}

const phoneEntityView: m.Component<Attrs> = {
  view ({attrs: {data: {email, phone, name}, onclick, handleRemove}}) {
    return m('.pe-container.columns.mx-1', [
      m('button.btn.btn-link.pe-edit.column.col-auto', {onclick}, m('.icon.icon-edit')),
      m('span.pe-phone.column', phone),
      m('span.pe-email.column', email),
      m('span.pe-name.column', name),
      m('button.btn.btn-link.pe-delete.column.col-auto.text-error', {onclick: handleRemove}, m('.icon.icon-delete')),
      // m('button.btn.pe-remove.column', {onclick: null}, m('.icon.icon-delete')),
    ])
  }
}

export default phoneEntityView
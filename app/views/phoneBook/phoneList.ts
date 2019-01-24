import m from 'mithril'
import {PhoneEntity, PhoneBookList} from '../../types/PhoneBook'
import phoneEntityView from './phoneEntityView'

import PBCtrl from '../../controllers/PhoneBookController'

interface Attrs {
  data: PhoneBookList
}

const phoneList: m.Component<Attrs> = {
  view ({attrs: {data = {}}}) {
    return m('.pl-container.p-relative', [
      m('.pl-items', Object.keys(data).map((id: string) => {
        if (data[id]) return m(phoneEntityView, {
          data: data[id],
          onclick: function () {
            PBCtrl.editPhone(id)
          },
          handleRemove: function () {PBCtrl.remove(id)}
        })
      })),
      m('button.btn.btn-primary.btn-lg.pl-add-btn.p-absolute.s-circle', {onclick: PBCtrl.createPhone}, m('i.icon.icon-plus'))
    ])
  }
}

export default phoneList
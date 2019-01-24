import m from 'mithril'
import phoneList from './phoneList'
import searchInput from './search'
import phModal from './phModal'

import PBCtrl from '../../controllers/PhoneBookController'

import {PBModalWindowType} from '../../types/PhoneBook'

const phoneBook: m.Component = {
  view () {
    function handleModal(modal: PBModalWindowType) {
      let props = {
        open: modal.open,
        title: modal.title,
        onsubmit: function() {modal.onsubmit()},
        onclose: modal.toggle,
        item: modal.item
      }
      return m(phModal, props)
    }
    return m('.phone-book.column.col-8.col-sm-auto.col-mx-auto', [
      m(searchInput),
      m(phoneList, {data: PBCtrl.list}),
      PBCtrl.createModal.open && handleModal(PBCtrl.createModal),
      PBCtrl.editModal.open && handleModal(PBCtrl.editModal),
    ])
  }
}

export default phoneBook
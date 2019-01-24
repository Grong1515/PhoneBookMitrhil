import PBModel from '../models/PhoneBookModel'

import {PBModalWindowClass, PhoneEntity, PhoneBookList} from '../types/PhoneBook'
import EditModal from './EditModal'
import CreateModal from './CreateModal'

function trim(str: string) {
  return str.toLowerCase().replace(/[^\w\d]/gi, '')
}

abstract class PBCtrl extends PBModel {
  private static filter = ''
  private static _filteredList: PhoneBookList = {}
  static editModal = new EditModal
  static createModal = new CreateModal
  static getById(id: string): PhoneEntity | null {
    return PBModel.list[id] || null
  }
  static editPhone (id: string): void {
    PBCtrl.editModal.item = JSON.parse(JSON.stringify(this.getById(id)))
    if (PBCtrl.editModal.item) PBCtrl.editModal.toggle()
    else console.error('there is no such entity')
  }
  static createPhone (): void {
    PBCtrl.createModal.item = {
      name: '',
      phone: '',
      email: '',
      id: ''
    }
    PBCtrl.createModal.toggle();
  }
  static get list () {
    return PBCtrl._filteredList
  }
  static setFilter (f: string): void {
    // console.log('set filter ', f, PBModel.list)
    PBCtrl.filter = f
    if (f == '') {
      PBCtrl._filteredList = PBModel.list
      return
    }
    PBCtrl._filteredList = Object.keys(PBModel.list).reduce((res: PhoneBookList, el: string) => {
      let t = PBCtrl.getById(el)
      if (!t) return res
      let tf = trim(f)
      // console.log(tf, trim(t.name).indexOf(tf), trim(t.phone).indexOf(tf), trim(t.email).indexOf(tf))
      if (~trim(t.name).indexOf(tf) || ~trim(t.phone).indexOf(tf) || ~trim(t.email).indexOf(tf)) res[el] = t
      return res
    }, {})
  }
};

export default PBCtrl
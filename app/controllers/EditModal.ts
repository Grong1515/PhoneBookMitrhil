import PBModel from '../models/PhoneBookModel'
import autobind from 'autobind-decorator'

import {PBModalWindowClass, PhoneEntity} from '../types/PhoneBook'

// @autobind
export default class editModal extends PBModalWindowClass {
  constructor() {
    super('Edit Entity')
  }
  onsubmit () {
    PBModel.update(this.item)
    this.toggle()
  }
};

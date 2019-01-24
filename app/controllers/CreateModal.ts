import PBModel from '../models/PhoneBookModel'
import autobind from 'autobind-decorator'

import {PBModalWindowClass, PhoneEntity} from '../types/PhoneBook'

// @autobind
export default class createModal extends PBModalWindowClass {
  constructor() {
    super('Create')
    this.item = {
      name: '',
      phone: '',
      email: '',
      id: ''
    }
  }
  onsubmit () {
    PBModel.create(this.item)
    this.toggle()
  }
};
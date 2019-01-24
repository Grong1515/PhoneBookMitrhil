import m from 'mithril'

import PBCtrl from '../controllers/PhoneBookController'

import PhoneBookItem, {PhoneEntity, PhoneBookList} from '../types/PhoneBook'


abstract class PhoneBookModel {
  private static requestPath = '/api/pb/'
  private static _list: PhoneBookList = {}
  static get list() {return this._list}
  public static get(id: string = '') {
    console.log('model: get')
    m.request({
      method: 'GET',
      url: this.requestPath + id
    }).then((data: PhoneBookItem) => {
      if (!data.id) this._list = data as PhoneBookList;
      else this._list[data.id as string] = data as PhoneEntity;
    })
    .then(()=>{PBCtrl.setFilter('')})
    .then(()=>{m.redraw()})
  }
  public static create(data: PhoneEntity) {
    console.log('model: create')
    m.request({
      method: 'POST',
      url: this.requestPath,
      data: {data}
    }).then((data: PhoneEntity) => {
      this._list[data.id] = data
    }).then(()=>{m.redraw()})
  }
  public static remove (id: string = '') {
    console.log('model: remove')
    m.request({
      method: 'DELETE',
      url: this.requestPath + id
    })
    .then(() => {
      this._list[id] = null
    })
    .then(()=>{m.redraw()})
  }
  public static update (data: PhoneEntity) {
    console.log('model: update')
    m.request({
      method: 'PUT',
      url: this.requestPath,
      data: {data}
    }).then(()=>{this._list[data.id as string] = data as PhoneEntity})
  }
};

PhoneBookModel.get();
export default PhoneBookModel;
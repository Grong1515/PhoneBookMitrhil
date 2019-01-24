import m from 'mithril'
import autobind from 'autobind-decorator'

export interface PhoneEntity {
  name: string,
  email: string,
  phone: string,
  id: string,
  [key: string]: string
}

export interface PhoneBookList {
  [key: string]: PhoneEntity
}

export interface PBModalWindowType {
  open: boolean
  title: string
  toggle: () => void
  onsubmit: () => void
  item: PhoneEntity | null
}


export class PBModalWindowClass implements PBModalWindowType {
  constructor(title: string) {
    this.open = false
    this.title = title
    this.item = null
    this.toggle = this.toggle.bind(this)
    this.onsubmit = this.onsubmit.bind(this)
  }
  public open: boolean
  public title: string
  public toggle () {
    this.open = !this.open
  }
  public onsubmit () {console.log(this.title + ' modal submit')}
  item: PhoneEntity | null
}

type PhoneBookItem = PhoneEntity | PhoneBookList
export default PhoneBookItem
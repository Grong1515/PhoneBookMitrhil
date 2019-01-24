import m from 'mithril'

import PBCtrl from '../../controllers/PhoneBookController'

const searchInput: m.Component = {
  view () {
    return m('.form-group', m('input.form-input', {placeholder: 'Search', oninput: m.withAttr('value', PBCtrl.setFilter)}))
  }
}

export default searchInput
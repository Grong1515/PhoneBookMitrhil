import m from "mithril"
import 'spectre.css'
import 'icons.css'
import './styles/styles.css'

import app from './views'

m.route.prefix('')
m.route(document.body, '/', app)

if (module.hot) {
  module.hot.accept()
  module.hot.dispose(function() {
  })
}

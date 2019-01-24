import m from 'mithril'

`
<div class="modal active" id="modal-id">
  <a href="#close" class="modal-overlay" aria-label="Close"></a>
  <div class="modal-container">
    <div class="modal-header">
      <a href="#close" class="btn btn-clear float-right" aria-label="Close"></a>
      <div class="modal-title h5">Modal title</div>
    </div>
    <div class="modal-body">
      <div class="content">
        <!-- content here -->
      </div>
    </div>
    <div class="modal-footer">
      ...
    </div>
  </div>
</div>
`

interface Attrs {
  open: boolean,
  small?: boolean,
  title: string,
  onclose(): void
}

const modal: m.Component<Attrs> = {
  view: function ({attrs: {open, small, title, onclose}, children}) {
    return m('.modal', {
      class: [open && 'active', small && 'modal-sm'].join(' '),
    }, [
      m('a.modal-overlay', {href: '#close', 'aria-label': 'Close', onclick: onclose}),
      m('.modal-container', 
        m('.modal-header', [
          m('a.btn.btn-clear.float-right', {href: '#close', 'aria-label': 'Close', onclick: onclose}),
          title && m('modal-title', title)
        ]),
        children
      )
    ])
  }
}

export default modal
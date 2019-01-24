const PhoneEntity = require('./phoneEntity');

module.exports = {
  list: {},
  create: function (parameters) {
    let pe = new PhoneEntity(parameters);
    // if (this.list[id]) throw new InvalidDataError(id + ' :phone entity already exists');
    this.list[pe.id] = pe;
    return pe;
  },
  get: function (id) {
    // console.log(this.list)
    if (!id) return this.list;
    if (this.list[id]) return this.list[id];
    return null;
  },
  remove: function (id) {
    if (this.list[id]) this.list[id] = null;
  },
  update: function ({id, name, email, phone}) {
    let pe = this.list[id];
    if (!pe) throw new InvalidDataError(id + ' :phone entity doesn\'t exist');
    name && (pe.name = name);
    email && (pe.email = email);
    phone && (pe.phone = phone);
  }
}
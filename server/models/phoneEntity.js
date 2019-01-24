module.exports = function PhoneEntity ({name = '', email, phone}) {
  if (!(this instanceof PhoneEntity)) throw new Error ('PhoneEntity must be called with "new"');
  let pe = {};
  Object.defineProperties(pe, {
    id: {
      value: Math.random().toString(36).substring(7),
      enumerable: true
    },
    email: {
      enumerable: true,
      set: function (newValue) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (re.test(String(newValue).toLowerCase())) email = newValue;
        else throw new InvalidDataError(newValue+ ': email is not valid.');
      },
      get: function () {return email}
    },
    phone: {
      enumerable: true,
      set: function (newValue) {
        // newValue = newValue.replace(/[ -\.]/, '');
        var re = /^[\+]?[(]?[0-9]{1,3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
        if (re.test(String(newValue).toLowerCase())) phone = newValue;
        else throw new InvalidDataError(newValue + ': phone is not valid.');
      },
      get: function () {return phone}
    }
  });
  pe.name = name;
  pe.email = email;
  pe.phone = phone;
  return pe;
}
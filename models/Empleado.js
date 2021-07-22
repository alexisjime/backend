const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let empleadoSchema = new Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  rollno: {
    type: Number
  }
}, {
    collection: 'empleados'
  })

module.exports = mongoose.model('Empleado', empleadoSchema)
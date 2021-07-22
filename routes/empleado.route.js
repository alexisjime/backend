let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router();

// Modelo Empleado
let studentSchema = require('../models/Empleado');

// Crear empleados
router.route('/create-empleado').post((req, res, next) => {
  studentSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
});

// Leer Empleados
router.route('/').get((req, res) => {
  studentSchema.find((error, data) => {
    if (error) {
      return req.next(error)
    } else {
      res.json(data)
    }
  })
})

// Obtener Empleado
router.route('/edit-empleado/:id').get((req, res) => {
  studentSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return req.next(error)
    } else {
      res.json(data)
    }
  })
})


// Actualizar Empleado
router.route('/update-empleado/:id').put((req, res, next) => {
  studentSchema.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data)
      console.log('Empleado agregado correctamente !')
    }
  })
})

// Eliminar Empleados
router.route('/delete-empleado/:id').delete((req, res, next) => {
  studentSchema.findByIdAndDelete(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data).json({
        msg: data
      })
    }
  })
})

module.exports = router;
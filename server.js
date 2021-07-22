let express = require('express');
let mongoose = require('mongoose');
let cors = require('cors');
let bodyParser = require('body-parser');
let dbConfig = require('./database/db');

// Express Ruta
const studentRoute = require('./routes/empleado.route')

// Conectando a la base de datos mongoDB
mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.db, {
  useNewUrlParser: true
}).then(() => {
  console.log('Base de datos conectado correctamente!')
},
  error => {
    console.log('No se pudo conectar a la base de datos : ' + error)
  }
)

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cors());
app.use('/students', studentRoute)


// Puerto
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
  console.log('Conectado en el puerto ' + port)
})

// 404 Error
app.use((req, res, next) => {
  next(req.createError(404));
});

app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});
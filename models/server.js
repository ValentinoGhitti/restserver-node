const express = require('express');
const cors = require('cors');

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.usersPath = '/api/users';
    
    //Middlewares
    this.middlewaress();

    //rutas de mi app
    this.routes();
  }

  middlewaress() {
    //CORS
    this.app.use(cors());
    
    //directorio público
    this.app.use(express.static('public'));
  }

  routes() {
    this.app.use(this.usersPath, require('../routes/users.routes'));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log('Servidor corriendo en puerto:', this.port);
    });
  }
}

module.exports = Server;
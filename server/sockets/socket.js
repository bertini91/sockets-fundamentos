const { io } = require("../server");

io.on("connection", (client) => {
  console.log("Usuario conectado");

  //enviarMensaje puede tener otro nombre del nombre de la fun que escuchamos
  client.emit("enviarMensaje", {
    //Le envio un msj al cliente, puede ser cualquiera
    usuario: "Administrador",
    mensaje: "Bienvenido a esta app",
    mensaje2: "¿Que deseas?",
  });

  client.on("disconnect", () => {
    //para saber que el usuario se desconecto
    console.log("Usuario desconectado");
  });

  //Escucharmos al cliente
  client.on("enviarMensaje", (data, callback) => {
    //enviarMensaje fue definido en index.html
    console.log(data);

    /* broadcast, cuando un cliente envia un msj, se difunde a todos los usuarios conectados
     */
    client.broadcast.emit("enviarMensaje", data);

    /* if (data.usuario) {
      //callback sera la funcion que se ejecuta cuando todo sale bien
      callback({
        resp: "TODO SALIO BIEN!",
      });
    } else {
      callback({
        resp: "TODO SALIO MAAL!!!!",
      });
    } */
  });
});

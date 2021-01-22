let socket = io();

/* on: Escuchar */
socket.on("connect", function () {
  console.log("Conectado al servidor");
});

/* on: Escuchar */
socket.on("disconnect", function () {
  console.log("Perdimos conexion con el servidor");
});

/* Emit: Enviamos informacion  */
socket.emit(
  "enviarMensaje",
  {
    usuario: "Nicolas",
    mensaje: "Hola mundo",
  },
  function (resp) {
    //esta funcion se ejecuta cuando todo sale bien
    console.log("Se disparó el callback");
    console.log("respuesta server: ", resp);
  }
);

/* Escuchamos informacion */
socket.on("enviarMensaje", function (respuesta) {
  console.log("Servidor: ", respuesta);
});
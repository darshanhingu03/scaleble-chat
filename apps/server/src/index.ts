import http from "http";
import SocketService from "./services/socket";

async function init() {
  const socketService = new SocketService();

  const httpServer = http.createServer();

  // http server attach with websocket server
  socketService.io.attach(httpServer);

  const PORT = process.env.PORT ? process.env.PORT : 8080;

  httpServer.listen(PORT, () =>
    console.log(`HTTP Server started at PORT: ${PORT}`)
  );

  socketService.initListeners();
}

init();

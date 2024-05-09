import http from "http";
import SocketService from "./services/socket";
import { startConsumer } from "./services/kafka";
async function init() {
  startConsumer();
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

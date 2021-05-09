import { error } from "consola";
import Server from "./src/http/server";
import Config from "./src/config";

try {
  new Server(Config.Port).start();
} catch (err) {
  error({
    badge: true,
    message: err.message,
  });
}

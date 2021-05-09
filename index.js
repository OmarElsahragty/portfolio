import { error } from "consola";
import Server from "./src/http/server";
import Config from "./src/config";

console.error = (message) => {
  error({
    badge: true,
    message,
  });
};

try {
  new Server(Config.Port).start();
} catch (err) {
  console.error(err.message);
}

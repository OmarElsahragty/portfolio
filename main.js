import Server from "./src/http/server";
import Config from "./src/config";

export default () => {
  try {
    new Server(Config.Port).start();
  } catch (err) {
    console.error("❌ ", err.message);
  }
};

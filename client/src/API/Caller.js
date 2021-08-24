import axios from "axios";
import { Mails } from "./Calls";

class _CoreAPI {
  constructor() {
    this.caller = axios.create({
      headers: {
        "content-type": "application/json",
      },
    });

    this.Mails = new Mails(this.caller);
  }

  addCommonHeader(key, val) {
    this.caller.defaults.headers.common[key] = val;
  }

  removeCommonHeader(key) {
    this.caller.defaults.headers.common[key] = null;
  }
}

export default new _CoreAPI();

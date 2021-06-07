import axios from "axios";
import { BASE_URL } from "./URLs";
import { Mails } from "./Calls";

class _CoreAPI {
  constructor() {
    this.caller = axios.create({
      baseURL: BASE_URL,
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

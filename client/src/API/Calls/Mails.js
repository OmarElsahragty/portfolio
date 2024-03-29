import * as URLs from "../URLs";

class Mails {
  constructor(caller) {
    this.caller = caller;
  }

  sendMail = (data) => this.caller.post(URLs.SEND_MAIL, data);
}

export default Mails;

import axios from "axios";

const Caller = axios.create({
  baseURL: "/",
  headers: {
    "content-type": "application/json",
  },
});

export default Caller;

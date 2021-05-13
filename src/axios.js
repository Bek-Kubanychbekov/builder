import axios from "axios";

const instance = axios.create();
instance.defaults.baseURL = "https://builder-e02c1-default-rtdb.firebaseio.com";

export default instance;
  
import axios from "axios";

const instance = axios.create();
instance.defaults.baseURL = "://builder-8df5b-default-rtdb.firebaseio.com";

export default instance;
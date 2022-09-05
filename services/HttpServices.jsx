import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000/api";

const Http = {
    get: axios.get,
    post: axios.post,
    update: axios.put,
    delete: axios.delete,
};

export default Http;

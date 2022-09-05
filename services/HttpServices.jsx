import axios from "axios";

axios.defaults.baseURL = "https://roghanicar-test.vercel.app/api";

const Http = {
    get: axios.get,
    post: axios.post,
    update: axios.put,
    delete: axios.delete,
};

export default Http;

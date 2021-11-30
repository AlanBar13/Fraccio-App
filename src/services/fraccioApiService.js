import axios from "axios";


let apiURL = "http://localhost:5000/"

const fraccioApi = axios.create({
    baseURL: apiURL
})

export default fraccioApi
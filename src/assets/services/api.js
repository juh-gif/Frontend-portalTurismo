import axios from "axios"

const api = axios.create({
    beseURL : 'http://localhost:5000/api'
})
export default api;
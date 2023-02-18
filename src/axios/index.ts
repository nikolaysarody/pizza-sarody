import axios from "axios";

console.log(process.env.REACT_APP_BASE_URL)

export default axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
        'Access-Control-Allow-Origin' : '*',
        'Content-Type': 'application/json',
    }
})
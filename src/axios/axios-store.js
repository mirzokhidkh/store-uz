import axios from "axios";

export default axios.create({
    baseURL: 'https://allstore-713-default-rtdb.firebaseio.com/'
})
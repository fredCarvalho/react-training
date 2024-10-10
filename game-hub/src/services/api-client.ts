import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key: '9ced02de54b544ada67a6875ae126206'
    }
})
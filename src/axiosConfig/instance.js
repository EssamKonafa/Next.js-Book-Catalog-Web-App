import axios from 'axios'

//creating the connection to API
const instance = axios.create({
    baseURL:'https://gutendex.com/books'
})

export default instance
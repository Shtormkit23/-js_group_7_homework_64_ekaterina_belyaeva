import axios from 'axios';

const axiosBlog = axios.create({
    baseURL: 'https://blog-js-7.firebaseio.com/'
})

export default axiosBlog;
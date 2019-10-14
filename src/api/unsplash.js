import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization:'Client-ID 02bdb35e915629652d0a2c2c48a95f5c79cb35b83b9e898a03486b162d1c1a88'
    }
});
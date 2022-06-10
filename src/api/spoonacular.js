import axios from 'axios';

export default axios.create({
    baseURL : 'https://api.spoonacular.com',
    headers : {
        'Content-Type': 'application/json',
    },

})
import axios from 'axios';


export const get = (url, ...args) => axios({method: 'get', url});

export const post = (url, data) => axios({method: 'post', url});

export const put = (url, data) => axios({method: 'put', url});

export const erase = (url, ...args) => axios({method: 'delete', url});
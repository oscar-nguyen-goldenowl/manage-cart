import axios from 'axios';

const staticURL = 'http://localhost:3000';


export const get = (url, ...args) => axios({method: 'get', url: staticURL + url})

export const post = (url, data) => axios({method: 'post', url: staticURL + url});

export const put = (url, data) => axios({method: 'put', url: staticURL + url});

export const erase = (url, ...args) => axios({method: 'delete', url: staticURL + url});
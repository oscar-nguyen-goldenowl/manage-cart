import axios from 'axios';

// const staticURL = 'http://localhost:3000';
const staticURL = 'https://oscar-oscar.herokuapp.com';

export const get = (url, ...args) => axios({method: 'get', url: staticURL + url, headers: {'Authorization': localStorage.getItem('token') ? localStorage.getItem('token') : ""}});

export const post = (url, data) => axios({method: 'post', url: staticURL + url, data})

export const put = (url, data) => axios({method: 'put', url: staticURL + url, data, headers: {'Authorization': localStorage.getItem('token') ? localStorage.getItem('token') : ""}})

export const erase = (url, ...args) => axios({method: 'delete', url: staticURL + url})

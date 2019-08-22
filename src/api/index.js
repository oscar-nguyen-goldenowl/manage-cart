import axios from 'axios';

const staticURL = 'http://localhost:3000';

export const get = (url, ...args) => {
  return axios(
  {
    method: 'get', 
    url: staticURL + url,
    headers: {
      'Authorization': localStorage.getItem('token') ? localStorage.getItem('token') : ""
    }
  });
}

export const post = (url, data) => {
  return axios(
  {
    method: 'post', 
    url: staticURL + url,
    data
  })
}

export const put = (url, data) => {
  return axios(
  {
      method: 'put', 
      url: staticURL + url, 
      data
  })
};

export const erase = (url, ...args) => {
  return axios(
  {
    method: 'delete', url: staticURL + url
  })
};

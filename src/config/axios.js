import axios from 'axios';

const api = axios.create({
  baseURL: 'https://1xvwcs2af5.execute-api.us-east-1.amazonaws.com/dev/api/0.1/',
  responseType: 'json'
});

export const getCategories = api.get('/categories2');

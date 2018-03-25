import axios from 'axios';

const HTTP = axios.create({
  baseURL: 'http://localhost:4567',
  headers: { X_REQUESTED_WITH: ' XMLHttpRequest' },
});

HTTP.interceptors.response.use(
  response => response,
  error => error
);

export default {
  //hello() {
    //return HTTP.get('/').
      //then(function(resp){
        //debugger
      //});
  //},
  hello() {
    return axios.get('http://localhost:4567')
      .then(function(resp) {
        debugger;
        return resp.data.key;
      });
  },
};

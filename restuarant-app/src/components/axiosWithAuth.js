import axios from 'axios';

const axiosWithAuth = () => {
  const token = localStorage.getItem('token');

  return axios.create({
    baseURL: 'https://restaurant-passport-4.herokuapp.com/',
    headers: {
      Authorization: token
    }
  });
};

export default axiosWithAuth;
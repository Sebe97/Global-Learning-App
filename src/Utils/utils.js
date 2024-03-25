// import axios from 'axios';

export const sum = (a, b) => {
  return a + b;
};

export const createUser = () => {
  const user = { firstName: 'John', lastName: 'Sebi' };
  return user;
};

export const fetchUser = () => {
  return axios
    .get('https://jsonplaceholder.typicode.com/users/1')
    .then((res) => res.data)
    .catch((err) => 'err');
};

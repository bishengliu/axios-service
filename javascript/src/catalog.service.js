import httpService from './http.service.js';

export const health = () => httpService({
  url: '/',
  method: 'GET',
});

export const signin = (data) => httpService({
  url: 'auth/signin',
  method: 'POST',
  data,
});

export const signup = (data) => httpService({
  url: 'auth/signup',
  method: 'POST',
  data,
});

const catalogService = {
  health,
  signup,
  signin,
};

export default catalogService;

import axios from 'axios';
import axiosRetry from 'axios-retry';

import logger from './logger.js';

const BASEURL = process.env.BASEURL || 'http://localhost:3000';

const instance = axios.create({
  baseURL: BASEURL,
  timeout: 1000,
});

// retry
axiosRetry(instance, {
  retries: 3,
  retryDelay: (retryCount) => retryCount * 2000,
});

// response interceptor
const handleResponseSuccess = (res) => {
  logger.info(res.data);
  return res;
};

const handleResponseError = (error) => {
  if (error && error.response) {
    logger.debug(error.response.data);
    logger.debug(error.response.status);
    logger.debug(error.response.headers);

    switch (error.response.status) {
      case 404:
        logger.error('404 Not Found:', error.message);
        break;
      case 401:
        logger.error('401 Unauthorized:', error.message);
        break;
      case 400:
        logger.error('400 Bad Request:', error.message);
        break;
      default:
        logger.error(error.response.data || error.message);
        break;
    }
  } else {
    logger.error(error);
  }

  return Promise.reject(error.response?.data || error.message || 'unknown error!');
};

instance.interceptors.response.use(handleResponseSuccess, handleResponseError);

const httpService = (options) => instance(options);

export default httpService;

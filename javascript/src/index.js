import { signin } from './catalog.service.js';
import logger from './logger.js';

try {
  const response = await signin({ username: 'admin', password: 'Lbs_198236' });
  console.log(response.data);
} catch (error) {
  logger.error(error);
}

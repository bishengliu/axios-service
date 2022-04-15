import winston, { format } from 'winston';
import logger from './logger.service';

jest.mock('winston', () => ({
  format: {
    colorize: jest.fn(),
    combine: jest.fn(),
    label: jest.fn(),
    timestamp: jest.fn(),
    printf: jest.fn(),
    json: jest.fn(),
  },
  createLogger: jest.fn().mockReturnValue({
    debug: jest.fn(),
    log: jest.fn(),
    info: jest.fn(),
    error: jest.fn(),
    add: jest.fn(),
  }),
  transports: {
    Console: jest.fn(),
    File: jest.fn(),
  },
}));

describe('logger service', () => {
  test('logger init', () => {
    const spy = jest.spyOn(winston, 'createLogger');
    logger.info('info');
    expect(spy).toHaveBeenCalled();
  });
});

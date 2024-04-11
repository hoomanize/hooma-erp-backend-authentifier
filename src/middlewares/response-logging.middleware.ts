import laabr from 'laabr';

import type { Server } from '@hapi/hapi';

const setTokens = () => {
  laabr.token('splitter', () => '\x1b[0m--------------------------------------------\x1b[0m\n');

  laabr.token('statusColor', (args) => {
    const { res } = args;

    const status = res.statusCode;
    const color =
      status >= 500 ? 31 : status >= 400 ? 31 : status >= 300 ? 36 : status >= 200 ? 32 : 0;

    return '\x1b[' + color + 'm' + status + '\x1b[0m';
  });

  laabr.token('userAgent', (args) => {
    const { req } = args;

    return req.headers['user-agent'];
  });
};

const createPreset = () => {
  laabr.preset(
    'server.responses',
    `:splitter\x1b[0m:method\x1b[0m \x1b[36m:url\x1b[0m :statusColor - :time[iso] - :responseTime ms - :userAgent`
  );
};

const setFormat = () => {
  laabr.format('onPostStart', '[\x1b[36mINFO\x1b[0m] logging middleware initialized');
  laabr.format('response', 'server.responses');
  laabr.format('request-error', 'request error');
  laabr.format('uncaught', 'uncaught');
};

export const setupResponseLogger = () => {
  setTokens();
  createPreset();
  setFormat();
};

export const addResponseLoggerMiddleware = async (server: Server) => {
  setupResponseLogger();

  await server.register(laabr);
};

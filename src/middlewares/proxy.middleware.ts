import h2o2 from '@hapi/h2o2';

import type { Server } from '@hapi/hapi';

export const addProxyMiddleware = async (server: Server) => {
  await server.register(h2o2);
};

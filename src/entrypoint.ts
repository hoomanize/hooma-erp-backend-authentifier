import { initServer, startServer } from './server.js';

const runService = async () => {
  const server = await initServer();

  await startServer(server);
};

runService();

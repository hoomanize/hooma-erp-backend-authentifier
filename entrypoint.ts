import { initServer, startServer } from './src/server';

const runService = async () => {
  const server = await initServer();

  await startServer(server);
};

runService();

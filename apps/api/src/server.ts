import { buildApp } from './app.js';
import { env } from './config/env.js';

const app = buildApp();

async function shutdown(signal: string): Promise<void> {
  app.log.info({ signal }, 'Shutdown signal received');

  try {
    await app.close();
    process.exit(0);
  } catch (error) {
    app.log.error(error, 'Failed to shut down cleanly');
    process.exit(1);
  }
}

process.once('SIGINT', () => {
  void shutdown('SIGINT');
});

process.once('SIGTERM', () => {
  void shutdown('SIGTERM');
});

try {
  await app.listen({
    host: env.API_HOST,
    port: env.API_PORT,
  });
} catch (error) {
  app.log.error(error);
  process.exit(1);
}

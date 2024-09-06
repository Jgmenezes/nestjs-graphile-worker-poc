import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { validateEnvironmentVars } from '@config/configuration';
import { WorkerService } from 'nestjs-graphile-worker';

async function bootstrap() {
  validateEnvironmentVars();

  const app = await NestFactory.create(AppModule);

  app.get(WorkerService).run();

  await app.listen(process.env.SERVER_PORT);
}

bootstrap();

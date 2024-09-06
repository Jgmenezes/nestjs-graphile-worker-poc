import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { configuration } from './config/configuration';
import { GraphileWorkerModule } from 'nestjs-graphile-worker';
import { HelloWorldTask } from './tasks/hello-world.task';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    GraphileWorkerModule.forRoot({
      connectionString: `postgresql://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`,
    }),
  ],
  controllers: [AppController],
  providers: [HelloWorldTask],
})
export class AppModule {}

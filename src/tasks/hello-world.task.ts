import { Injectable, Logger } from '@nestjs/common';
import { Task, TaskHandler } from 'nestjs-graphile-worker';

@Injectable()
@Task('hello-world')
export class HelloWorldTask {
  private logger = new Logger(HelloWorldTask.name);

  @TaskHandler()
  handler(payload: any) {
    this.logger.log(`handle ${JSON.stringify(payload)}`);
  }
}

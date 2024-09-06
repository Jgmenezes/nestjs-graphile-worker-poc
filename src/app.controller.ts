import { Controller, HttpCode, Post } from '@nestjs/common';
import { WorkerService } from 'nestjs-graphile-worker';

@Controller()
export class AppController {
  constructor(private readonly workerService: WorkerService) {}

  @Post()
  @HttpCode(201)
  async addJob() {
    await this.workerService.addJob('hello-world', { name: 'Hello World!' });
  }

  @Post('bulk')
  @HttpCode(201)
  async addJobBatch() {
    const jobs = new Array(100).fill(undefined).map((_, i) => ({
      identifier: 'hello-world',
      payload: { 'hello-world': i },
    }));

    return this.workerService.addJobs(jobs);
  }
}

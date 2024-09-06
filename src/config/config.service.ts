import { Injectable } from '@nestjs/common';
import { ConfigService as NestConfigService } from '@nestjs/config';

@Injectable()
export class ConfigService {
  constructor(private readonly config: NestConfigService) {}

  get<T = unknown>(name: string): T {
    const value = this.config.get<T>(name);

    if (value === undefined) {
      throw new Error(`Missing config value for ${name}`);
    }

    return value;
  }

  isLocal(): boolean {
    return this.get<string>('NODE_ENV') === 'development';
  }
}

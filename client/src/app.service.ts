import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(@Inject('TEST_SERVICE') protected readonly client: ClientProxy) {}

  async getHello(): Promise<any> {
    return this.client.send({ cmd: 'getHello' }, new Date().toISOString());
  }
}

import { Injectable, Logger } from '@nestjs/common';
import config from './config';

@Injectable()
export class AppService {
  getHello(data: string): string {
    Logger.log(config(), 'Microservice');
    return 'Hello World! ' + data + JSON.stringify(config());
  }
}

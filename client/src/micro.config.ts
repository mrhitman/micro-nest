import { Injectable } from '@nestjs/common';
import { ClientOptions, Transport } from '@nestjs/microservices';

@Injectable()
export class MicroConfig {
  getConfig(): ClientOptions {
    return {
      transport: Transport.NATS,
      options: {
        url: process.env.SQS || 'nats://sqs:4222',
        port: parseInt(process.env.SERVER_PORT || '7777', 10),
        host: process.env.SERVER_HOST || 'localhost'
      },
    };
  }
}

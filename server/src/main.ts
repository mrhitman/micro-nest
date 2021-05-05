import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';
import getConfig from './config';

async function bootstrap() {
  const config = getConfig();
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.NATS,
      options: {
        url: config.sqs,
        port: config.port,
        host: config.host,
      },
    },
  );
  await app.listen(() =>
    console.log(`Microservice runned: ${config.host}:${config.port}`),
  );
}
bootstrap();

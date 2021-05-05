import { Logger, Module } from '@nestjs/common';
import { ClientProxyFactory, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { App } from './app';
import { MicroConfig } from './micro.config';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    AppService,
    MicroConfig,
    {
      provide: 'TEST_SERVICE',
      useFactory: (conf: MicroConfig) => {
        const config = conf.getConfig();
        Logger.log(
          `Connect to server microservice:${JSON.stringify(config.options)}`,
        );
        return ClientProxyFactory.create(config);
      },
      inject: [MicroConfig],
    },
    App,
  ],
})
export class AppModule {}

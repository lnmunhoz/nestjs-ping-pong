import { NestFactory } from '@nestjs/core';
import {
  ClientProxy,
  MicroserviceOptions,
  Transport,
} from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.TCP,
      options: {
        port: 3000,
      },
    },
  );

  app.listen(() => console.log('Ping Service is listening'));
}
bootstrap();

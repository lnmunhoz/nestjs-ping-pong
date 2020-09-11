import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { PongProxy, PingProxy } from './common.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'PONG_CLIENT',
        transport: Transport.TCP,
        options: { port: 4444 },
      },
    ]),
    ClientsModule.register([
      {
        name: 'PING_CLIENT',
        transport: Transport.TCP,
        options: { port: 3000 },
      },
    ]),
  ],
  providers: [PongProxy, PingProxy],
  exports: [PongProxy, PingProxy],
})
export class CommonModule {}

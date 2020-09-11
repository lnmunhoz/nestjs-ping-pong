import { PingProxy } from '@app/common';
import { Controller } from '@nestjs/common';
import { EventPattern, Transport } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly ping: PingProxy) {}

  @EventPattern('PONG', Transport.TCP)
  pong() {
    console.log('PONG', new Date());
    setTimeout(() => {
      this.ping.emit();
    }, 200);
  }
}

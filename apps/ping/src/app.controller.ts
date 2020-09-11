import { Controller } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { PongProxy } from '@app/common';

@Controller()
export class AppController {
  constructor(private readonly pong: PongProxy) {}

  @EventPattern('PING')
  ping() {
    console.log('PING', new Date());
    setTimeout(() => {
      this.pong.emit();
    }, 200);
  }
}

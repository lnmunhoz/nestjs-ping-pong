import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class PongProxy {
  constructor(@Inject('PONG_CLIENT') private readonly client: ClientProxy) {}

  connect() {
    return this.client.connect();
  }

  emit() {
    return this.client.emit('PONG', {});
  }
}

@Injectable()
export class PingProxy {
  constructor(@Inject('PING_CLIENT') private readonly client: ClientProxy) {}

  connect() {
    return this.client.connect();
  }

  emit() {
    return this.client.emit('PING', {});
  }
}

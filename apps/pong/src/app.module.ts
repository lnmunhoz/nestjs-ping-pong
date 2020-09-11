import { Module } from '@nestjs/common';
import { CommonModule, PingProxy } from '../../../libs/common/src';
import { AppController } from './app.controller';

@Module({
  imports: [CommonModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {
  constructor(private readonly client: PingProxy) {}

  private connect() {
    this.client
      .connect()
      .then(() => {
        this.client.emit();
      })
      .catch(err => {
        console.log('error, trying again', new Date());
        setTimeout(() => {
          this.connect();
        }, 2000);
      });
  }

  async onApplicationBootstrap() {
    this.connect();
  }
}

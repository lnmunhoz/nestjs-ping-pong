import { CommonModule, PongProxy } from '@app/common';
import { Module, OnApplicationBootstrap } from '@nestjs/common';
import { AppController } from './app.controller';

@Module({
  imports: [CommonModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule implements OnApplicationBootstrap {
  constructor(private readonly client: PongProxy) {}

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

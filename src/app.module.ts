import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { PusherService } from './pusher.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [PusherService]
})
export class AppModule {
}

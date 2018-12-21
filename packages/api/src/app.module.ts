
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CoreModule } from '@monoapp/core';

@Module({
  imports: [CoreModule],
  controllers: [AppController],
})
export class AppModule {}

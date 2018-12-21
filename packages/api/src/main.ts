import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

export async function startApi(port: number = 3000) {
  const app = await NestFactory.create(AppModule);
  await app.listen(port);
}

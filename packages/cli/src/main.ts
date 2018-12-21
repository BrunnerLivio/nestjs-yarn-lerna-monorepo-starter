import { ApplicationModule } from '@monoapp/core';
import { NestFactory } from '@nestjs/core';

async function bootstrap() {
    const app = await NestFactory.create(ApplicationModule);
    await app.listen(3000);
}
bootstrap();
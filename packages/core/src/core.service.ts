import { Injectable } from '@nestjs/common';

@Injectable()
export class CoreService {
  getHello(): string {
    return 'Hello World!';
  }
}

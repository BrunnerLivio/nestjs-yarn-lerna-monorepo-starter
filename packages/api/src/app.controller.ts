
import { Get, Controller } from '@nestjs/common';
import { CoreService } from '@monoapp/core';

@Controller()
export class AppController {
  constructor(private readonly coreSerivce: CoreService) {}

  @Get()
  getHello(): string {
    return this.coreSerivce.getHello();
  }
}

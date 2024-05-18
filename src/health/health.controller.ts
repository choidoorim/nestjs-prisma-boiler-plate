import { Controller, Get, NotFoundException } from "@nestjs/common";

@Controller()
export class HealthController {
  @Get('/health')
  checkHealth(): string {
    throw new NotFoundException();
    return 'health check';
  }
}

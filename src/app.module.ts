import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_FILTER } from '@nestjs/core';

import { HealthModule } from './health/health.module';
import { AllExceptionFilter } from './common/filter';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `environment/.env.${process.env.NODE_ENV}`,
      isGlobal: true,
    }),
    HealthModule,
  ],
  providers: [
    {
      provide: APP_FILTER,
      useClass: AllExceptionFilter,
    },
  ],
})
export class AppModule {}

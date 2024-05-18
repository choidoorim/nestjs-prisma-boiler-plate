import { Module, ValidationPipe } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_FILTER, APP_PIPE } from '@nestjs/core';

import { AllExceptionFilter } from '@common/filter';
import validationPipeExceptionFactory from '@common/exception/factory/validation-exception.factory';
import { PrismaModule } from '@lib/prisma';

import { HealthModule } from './health/health.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `environments/.${process.env.NODE_ENV}.env`,
      isGlobal: true,
    }),
    PrismaModule,
    HealthModule,
  ],
  providers: [
    {
      provide: APP_FILTER,
      useClass: AllExceptionFilter,
    },
    {
      provide: APP_PIPE,
      useValue: new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
        exceptionFactory: validationPipeExceptionFactory,
      }),
    },
  ],
})
export class AppModule {}

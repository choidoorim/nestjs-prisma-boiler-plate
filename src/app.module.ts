import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { HealthModule } from './health/health.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `environment/.env.${process.env.NODE_ENV}`,
      isGlobal: true,
    }),
    HealthModule,
  ],
})
export class AppModule {}

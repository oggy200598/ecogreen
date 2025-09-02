import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HealthController } from './health/health.controller'; // 👈 import thêm

@Module({
  imports: [],
  controllers: [AppController, HealthController], // 👈 thêm HealthController
  providers: [AppService],
})
export class AppModule {}

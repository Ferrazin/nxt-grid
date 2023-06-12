import { Module } from '@nestjs/common';
import { MeterService } from './meter.service';
import { MeterController } from './meter.controller';

@Module({
  providers: [MeterService],
  controllers: [MeterController]
})
export class MeterModule {}

import { Meter } from './meter.entity';
import { Module } from '@nestjs/common';
import { MeterService } from './meter.service';
import { MeterController } from './meter.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Meter])],
  providers: [MeterService],
  controllers: [MeterController],
  exports: [TypeOrmModule],
})
export class MeterModule {}

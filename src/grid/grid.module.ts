import { Grid } from './grid.entity';
import { Module } from '@nestjs/common';
import { GridService } from './grid.service';
import { GridController } from './grid.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MeterModule } from 'src/meter/meter.module';

@Module({
  imports: [TypeOrmModule.forFeature([Grid]), MeterModule],
  providers: [GridService],
  controllers: [GridController],
})
export class GridModule {}

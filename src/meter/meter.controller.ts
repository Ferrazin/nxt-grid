import { Controller, Get, Param } from '@nestjs/common';
import { MeterService } from './meter.service';

@Controller('meter')
export class MeterController {
  constructor(private meterService: MeterService) {}

  @Get(':number')
  async getMeter(@Param('number') number) {
    return await this.meterService.getMeter(number);
  }
}

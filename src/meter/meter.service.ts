import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Meter } from './meter.entity';

@Injectable()
export class MeterService {
  constructor(
    @InjectRepository(Meter)
    private meterRepository: Repository<Meter>,
  ) {}

  async getMeter(number): Promise<Meter | undefined> {
    const meter = await this.meterRepository.findOne({ where: { number } });
    return meter;
  }
}

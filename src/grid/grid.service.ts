import { sortBy } from 'lodash';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Grid } from './grid.entity';
import { Meter } from '../meter/meter.entity';

@Injectable()
export class GridService {
  constructor(
    @InjectRepository(Grid)
    private gridRepository: Repository<Grid>,
    @InjectRepository(Meter)
    private meterRepository: Repository<Meter>,
  ) {}

  async getMeters(gridId: number) {
    const query = this.meterRepository
      .createQueryBuilder('meter')
      .innerJoinAndSelect('meter.customer', 'customer')
      .innerJoin('customer.grid', 'grid')
      .leftJoinAndSelect('meter.issues', 'issue')
      .where('grid.id = :gridId', { gridId });

    const meters = await query.getMany();

    return meters.map((meter) => ({
      meterNumber: meter.number,
      customerFullName: meter.customer.fullName,
      customerPhoneNumber: meter.customer.phoneNumber,
      issues: sortBy(meter.issues, 'createdAt').reverse()[0],
    }));
  }
  async createGrid(name: string) {
    const grid = this.gridRepository.create({ name });
    await this.gridRepository.save(grid);
    return grid;
  }
}

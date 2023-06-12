import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import { Grid } from '../grid/grid.entity';
import { Meter } from '../meter/meter.entity';

@Entity()
export class Customer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fullName: string;

  @Column()
  phoneNumber: string;

  @ManyToOne((_) => Grid, (grid) => grid.customers)
  @JoinColumn({ name: 'grid_id' })
  grid: Grid;

  @OneToMany((_) => Meter, (meter) => meter.customer)
  meters: Meter[];
}

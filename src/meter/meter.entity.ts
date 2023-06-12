import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { Customer } from '../customer/customer.entity';
import { Issue } from '../issue/issue.entity';
import { MeterType } from './meter-type.enum';

@Entity()
export class Meter {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  number: string;

  @Column()
  type: MeterType;

  @ManyToOne((_) => Customer, (customer) => customer.meters)
  @JoinColumn({ name: 'customer_id' })
  customer: Customer;

  @OneToMany((_) => Issue, (issue) => issue.meter)
  issues: Issue[];
}

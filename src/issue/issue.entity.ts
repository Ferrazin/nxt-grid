import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Meter } from '../meter/meter.entity';
import { IssueType } from './issue.enum';

@Entity()
export class Issue {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: IssueType;

  @Column()
  active: boolean;

  @ManyToOne((_) => Meter, (meter) => meter.issues)
  @JoinColumn({ name: 'meter_id' })
  meter: Meter;
}

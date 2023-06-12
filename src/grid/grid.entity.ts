import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Customer } from '../customer/customer.entity';

@Entity()
export class Grid {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany((_) => Customer, (customer) => customer.grid)
  customers: Customer[];
}

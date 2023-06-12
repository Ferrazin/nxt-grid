import { Module } from '@nestjs/common';
import { GridModule } from './grid/grid.module';
import { CustomerModule } from './customer/customer.module';
import { MeterModule } from './meter/meter.module';
import { IssueModule } from './issue/issue.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    GridModule,
    CustomerModule,
    MeterModule,
    IssueModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'nxt-grid',
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
})
export class AppModule {}

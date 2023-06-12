import { Issue } from './issue.entity';
import { Module } from '@nestjs/common';
import { IssueService } from './issue.service';
import { IssueController } from './issue.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Issue])],
  providers: [IssueService],
  controllers: [IssueController],
})
export class IssueModule {}

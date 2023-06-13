import { Controller, Get, Param, Post, Body, Query } from '@nestjs/common';
import { GridService } from './grid.service';

@Controller('grid')
export class GridController {
  constructor(private readonly gridService: GridService) {}

  @Get(':id/meters')
  async getMeters(
    @Param('id') id: number,
    @Query('page') page: number,
    @Query('pageSize') pageSize: number,
    @Query('sort') sort: string,
    @Query('order') order: 'ASC' | 'DESC',
  ) {
    const meters = await this.gridService.getMeters(
      id,
      page,
      pageSize,
      sort,
      order,
    );
    return meters;
  }

  @Post()
  async createGrid(@Body() name: string) {
    const grid = await this.gridService.createGrid(name);
    return grid;
  }
}

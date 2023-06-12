import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { GridService } from './grid.service';

@Controller('grid')
export class GridController {
  constructor(private readonly gridService: GridService) {}

  @Get(':id/meters')
  async getMeters(@Param('id') id: number) {
    const meters = await this.gridService.getMeters(id);
    return meters;
  }

  @Post()
  async createGrid(@Body() name: string) {
    const grid = await this.gridService.createGrid(name);
    return grid;
  }
}

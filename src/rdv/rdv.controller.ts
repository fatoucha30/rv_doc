import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { RdvService } from './rdv.service';
import { Rdv } from './rdv.entity';
//import { Delete } from 'lucide-react';

@Controller('rdv')
export class RdvController {

    constructor(private readonly RdvService: RdvService) { }

    @Get()
    findAll(): Promise<Rdv[]> {
        return this.RdvService.findAll()
    }

    @Get(':id')
    findOne(@Param('id') id: number): Promise<Rdv> {
        return this.RdvService.findOne(id)
    }

    @Post()
    create(@Body() createRdvDto: Rdv): Promise<Rdv> {
        return this.RdvService.create(createRdvDto)
    }

    @Put(':id')
    update(
        @Param('id') id: number,
        @Body() updateRdvDto: Partial<Rdv>
    ): Promise<Rdv> {
        return this.RdvService.update(id, updateRdvDto)
    }

    //@Delete(':id')
    //remove(@Param('id') id: number): Promise<void> {
    //    return this.RdvService.remove(id)
    //}
}

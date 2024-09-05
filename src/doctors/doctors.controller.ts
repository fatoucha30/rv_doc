import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { DoctorsService } from './doctors.service';
import { Doctors } from './doctor.entity';
//import { Delete } from 'lucide-react';

@Controller('doctors')
export class DoctorsController {

    constructor(private readonly DoctorsService: DoctorsService) { }

    @Get()
    findAll(): Promise<Doctors[]> {
        return this.DoctorsService.findAll()
    }

    @Get(':id')
    findOne(@Param('id') id: number): Promise<Doctors> {
        return this.DoctorsService.findOne(id)
    }

    @Post()
    create(@Body() createDoctorsDto: Doctors): Promise<Doctors> {
        return this.DoctorsService.create(createDoctorsDto)
    }

    @Put(':id')
    update(
        @Param('id') id: number,
        @Body() updateDoctorsDto: Partial<Doctors>
    ): Promise<Doctors> {
        return this.DoctorsService.update(id, updateDoctorsDto)
    }

    //@Delete(':id')
    //remove(@Param('id') id: number): Promise<void> {
    //    return this.DoctorsService.remove(id)
    //}
}



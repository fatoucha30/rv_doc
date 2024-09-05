import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { PatientsService } from './patients.service';
import { Patients } from './patients.entity';
//import { Delete } from 'lucide-react';

@Controller('patients')
export class PatientsController {

    constructor(private readonly PatientsService: PatientsService) { }

    @Get()
    findAll(): Promise<Patients[]> {
        return this.PatientsService.findAll()
    }

    @Get(':id')
    findOne(@Param('id') id: number): Promise<Patients> {
        return this.PatientsService.findOne(id)
    }

    @Post()
    create(@Body() createPatientsDto: Patients): Promise<Patients> {
        return this.PatientsService.create(createPatientsDto)
    }

    @Put(':id')
    update(
        @Param('id') id: number,
        @Body() updatePatientsDto: Partial<Patients>
    ): Promise<Patients> {
        return this.PatientsService.update(id, updatePatientsDto)
    }

    //@Delete(':id')
    //remove(@Param('id') id: number): Promise<void> {
    //    return this.PatientsService.remove(id)
    //}
}

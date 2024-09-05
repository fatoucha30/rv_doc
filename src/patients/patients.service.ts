import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Patients } from './patients.entity'

@Injectable()
export class PatientsService {
    constructor(
        @InjectRepository(Patients)
        private patientsRepository: Repository<Patients>
    ) { }

    findAll(): Promise<Patients[]> {
        return this.patientsRepository.find()
    }

    findOne(id: number): Promise<Patients> {
        return this.patientsRepository.findOneBy({ id })
    }

    create(patients: Patients): Promise<Patients> {
        return this.patientsRepository.save(patients)
    }

    async update(id: number, updatePatientsDto: Partial<Patients>): Promise<Patients> {
        await this.patientsRepository.update(id, updatePatientsDto)
        return this.patientsRepository.findOneBy({ id })
    }

   // async remove(id: number): Promise<void> {
        //await this.patientsRepository.delete(id)
    }
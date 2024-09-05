import { Injectable } from '@nestjs/common';
import { Doctors } from './doctor.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class DoctorsService {
   constructor(
    @InjectRepository(Doctors)
    private doctorsRepository: Repository<Doctors>
  ) {}

  findAll(): Promise<Doctors[]> {
    return this.doctorsRepository.find()
  }

  findOne(id: number): Promise<Doctors> {
    return this.doctorsRepository.findOneBy({ id })
  }

  create(doctor: Doctors): Promise<Doctors> {
    return this.doctorsRepository.save(doctor)
  }

    async update(id: number, updateDoctorsDto: Partial<Doctors>): Promise<Doctors> {
    await this.doctorsRepository.update(id, updateDoctorsDto)
    return this.doctorsRepository.findOneBy({ id })
  }

  //async remove(id: number): Promise<void> {
    //await this.doctorsRepository.delete(id)
  //}
} 


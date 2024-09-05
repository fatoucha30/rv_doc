import { Injectable } from '@nestjs/common';
import { Rdv } from './rdv.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class RdvService {
    constructor(
        @InjectRepository(Rdv)
        private rdvRepository: Repository<Rdv>
    ) { }

    findAll(): Promise<Rdv[]> {
        return this.rdvRepository.find()
    }

    findOne(id: number): Promise<Rdv> {
        return this.rdvRepository.findOneBy({ id })
    }

    create(rdv: Rdv): Promise<Rdv> {
        return this.rdvRepository.save(rdv)
    }

    async update(id: number, updateRdvDto: Partial<Rdv>): Promise<Rdv> {
        await this.rdvRepository.update(id, updateRdvDto)
        return this.rdvRepository.findOneBy({ id })
    }

} 


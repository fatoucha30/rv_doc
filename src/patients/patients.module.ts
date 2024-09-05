import { Module } from '@nestjs/common';
import { PatientsController } from './patients.controller';
import { TypeOrmModule } from '@nestjs/typeorm'
import { PatientsService } from './patients.service';
import { Patients } from './patients.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Patients])],
  controllers: [PatientsController],
  providers: [PatientsService]
})
export class PatientsModule { }


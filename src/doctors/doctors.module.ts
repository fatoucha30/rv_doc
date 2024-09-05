import { Module } from '@nestjs/common';
import { DoctorsController } from './doctors.controller';
import { TypeOrmModule } from '@nestjs/typeorm'
import { DoctorsService } from './doctors.service';
import { Doctors } from './doctor.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Doctors])],
  controllers: [DoctorsController],
  providers: [DoctorsService]
})
export class DoctorsModule {}

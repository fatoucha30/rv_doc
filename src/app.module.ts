import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DoctorsModule } from './doctors/doctors.module';
import { Doctors } from './doctors/doctor.entity';
import { PatientsModule } from './patients/patients.module';
import { Patients } from './patients/patients.entity';
import { RdvModule } from './rdv/rdv.module';
import { Rdv } from './rdv/rdv.entity';
import { AuthModule } from './auth/auth.module';
import { User } from './auth/user.entity';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'mybd',
      entities: [Doctors,Patients,Rdv,User ],
      synchronize: true,
    }), DoctorsModule, PatientsModule, RdvModule, AuthModule,
  ],
 
})
export class AppModule { }
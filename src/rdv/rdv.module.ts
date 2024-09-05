import { Module } from '@nestjs/common';
import { RdvController } from './rdv.controller';
import { RdvService } from './rdv.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Rdv } from './rdv.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Rdv])],

  controllers: [RdvController],
  providers: [RdvService]
})
export class RdvModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from 'src/app/controller/user.controller';
import { UsersService } from 'src/domain/service/user.service';
import { UsersEntity } from '../entity/users.entity';

@Module({
    imports: [TypeOrmModule.forFeature([UsersEntity])],
    controllers: [UsersController],
    providers: [UsersService],
})
export class UsersModule { }
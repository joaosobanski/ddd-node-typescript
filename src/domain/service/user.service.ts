import { Injectable, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersDTO } from 'src/app/dto/user.dto';
import { UsersEntity } from 'src/infra/entity/users.entity';
import { Repository } from 'typeorm';
import { User } from '../interface/user.interface';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(UsersEntity)
        private usersRepository: Repository<UsersEntity>,
    ) { }

    async buscarTodos() {
        return await this.usersRepository.find();
    }

    async criar(data: User) {
        const user = this.usersRepository.create(data);
        await this.usersRepository.save(data);
        return user;
    }

    async encontrarPorEmail(email: string): Promise<User> {
        return await this.usersRepository.findOne({
            where: {
                email: email,
            },
        });
    }

    async encontrarPorId(id: number) {
        return await this.usersRepository.findOne({ where: { id: id } });
    }

    // estrutura base o exemplo da documentação do typeORM
    // async update(id: number, data: Partial<UsersDTO>) {
    //     await this.usersRepository.update({ id }, data);
    //     return await this.usersRepository.findOne({ where: { id } });
    // }

    // async destroy(id: number) {
    //     await this.usersRepository.delete({ id });
    //     return { deleted: true };
    // }
}
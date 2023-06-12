import { Injectable, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsuarioAlterarSenhaDTO } from 'src/app/dto/usuarios/usuario-alterar-senha.dto';
import { UsersDTO } from 'src/app/dto/usuarios/usuario.dto';
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

    async updateUsuario(data: UsuarioAlterarSenhaDTO, id: number): Promise<UsersEntity> {
        await this.usersRepository.createQueryBuilder()
            .update(UsersEntity)
            .set(data)
            .where({ id })
            .execute();
        return await this.encontrarPorId(id)
    }

    async encontrarPorEmail(email: string): Promise<User> {
        return await this.usersRepository.findOne({
            where: {
                email: email,
            },
        });
    }

    async encontrarPorId(id: number): Promise<UsersEntity> {
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
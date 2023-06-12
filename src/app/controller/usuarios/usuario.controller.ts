import {
    Controller,
    Get,
    Post,
    Patch,
    Delete,
    Body,
    Param,
    HttpStatus,
    UseGuards,
    Put,
} from '@nestjs/common';

import { ApiTags } from '@nestjs/swagger'
import { UsuarioAlterarSenhaDTO } from 'src/app/dto/usuarios/usuario-alterar-senha.dto';
import { UsersService } from 'src/domain/service/user.service';
import { UsersEntity } from 'src/infra/entity/users.entity';
import { UsersDTO } from '../../dto/usuarios/usuario.dto';

@ApiTags('usuarios')
@Controller('usuarios')
export class UsersController {
    constructor(private usersService: UsersService) { }

    @Post('criar-usuario')
    async criarUsuario(@Body() data: UsersDTO) {
        const user = await this.usersService.criar(data);
        return {
            statusCode: HttpStatus.OK,
            message: 'Usuário criado com sucesso.',
            user,
        };
    }

    @Put(':id/alterar-senha')
    async alterarSenha(@Body() data: UsuarioAlterarSenhaDTO, @Param('id') id: number) {
        const user = await this.usersService.updateUsuario(data, id)
        return {
            statusCode: HttpStatus.OK,
            message: 'Senha do usuário foi alterada com sucesso.',
            user,
        };
    }
}
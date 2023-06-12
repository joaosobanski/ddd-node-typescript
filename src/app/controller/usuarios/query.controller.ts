import {
    Controller,
    Get,
    Param,
    HttpStatus,
} from '@nestjs/common';

import { ApiTags, ApiResponse, ApiCreatedResponse } from '@nestjs/swagger'
import { UsersService } from 'src/domain/service/user.service';
import { UsersEntity } from 'src/infra/entity/users.entity';

@ApiTags('usuarios')
@Controller('usuarios')
export class UsersQueryController {
    constructor(private usersService: UsersService) { }

    @Get()
    @ApiResponse({ description: 'Usuários encontrados.' })
    async buscarTodosUsuarios() {
        const users = await this.usersService.buscarTodos();
        return {
            statusCode: HttpStatus.OK,
            message: 'Usrs encontrados.',
            users
        };
    }
    @Get(':id')
    @ApiCreatedResponse({
        description: 'Usuário encontrado por Id.',
        type: UsersEntity,
    })
    async encontrarUsuarioPorId(@Param('id') id: number) {
        const data = await this.usersService.encontrarPorId(id);
        return {
            statusCode: HttpStatus.OK,
            message: 'User encontrado.',
            data,
        };
    }
}
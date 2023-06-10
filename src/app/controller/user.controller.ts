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
} from '@nestjs/common';

import { ApiTags, ApiResponse, ApiCreatedResponse, ApiForbiddenResponse } from '@nestjs/swagger'
import { UsersService } from 'src/domain/service/user.service';
import { UsersEntity } from 'src/infra/entity/users.entity';
import { UsersDTO } from '../dto/user.dto';

@ApiTags('users')
@Controller('users')
export class UsersController {
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

    @Post()
    async criarUsuario(@Body() data: UsersDTO) {
        const user = await this.usersService.criar(data);
        return {
            statusCode: HttpStatus.OK,
            message: 'Usuário criado com sucesso.',
            user,
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
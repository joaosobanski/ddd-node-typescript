import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty } from 'class-validator';

export class UsuarioAlterarSenhaDTO {
    @ApiProperty({
        example: '123',
    })
    @IsNotEmpty({ message: "Senha é obrigatória" })
    password: string;
}


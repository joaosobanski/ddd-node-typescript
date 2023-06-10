import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty } from 'class-validator';

export class UsersDTO {
    id: number;

    @ApiProperty({
        example: 'joao',
    })
    @IsNotEmpty({ message: "Nome é obrigatório" })
    name: string;

    @ApiProperty({
        example: 'joao@email.com',
    })
    @IsEmail({}, { message: 'E-mail inválido' })
    @IsNotEmpty({ message: "E-mail é obrigatório" })
    email: string;

    @ApiProperty({
        example: '123',
    })
    @IsNotEmpty({ message: "Senha é obrigatória" })
    password: string;
}


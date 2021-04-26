import { IsBoolean, IsEmail, IsOptional, IsString, MaxLength, MinLength } from "class-validator";

export class CreateUserDto {

    @IsOptional()
    @IsString()
    @MaxLength(20, {message: 'El nombre debe tener un maximo de 20 caracteres'})
    name: string;

    @IsOptional()
    @IsString()
    @MaxLength(20, {message: 'El apellido debe tener un maximo de 20 caracteres'})
    lastName: string;

    @IsEmail({}, {message: 'El email es requerido'})
    email: string;

    @MaxLength(12, {message: 'El password debe tener un maximo de 20 caracteres'})
    @MinLength(8, {message: 'El password debe tener un minimo de 8 caracteres'})
    @IsString({message: 'El password es requerido'})
    password: string;

    @IsOptional()
    @IsBoolean()
    active: boolean;
}

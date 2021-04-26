import { IsBoolean, IsNumber, IsOptional, IsString } from "class-validator";

export class CreatePunctuationDto {

    @IsString({message: 'La hora de inicio es requerida'})
    startGame: string;

    @IsString({message: 'La hora fin es requerida'})
    finishGame: string;

    @IsNumber({}, {message: 'El tiempo total es requerido'})
    totalTime: number;

    @IsBoolean({message: 'El estado del juego es requerido'})
    stateGame: boolean;

    @IsString({message: 'La dificultad es requerida'})
    difficulty

    @IsOptional()
    @IsNumber()
    idUser: number;

    @IsOptional()
    @IsBoolean()
    active: boolean;
}
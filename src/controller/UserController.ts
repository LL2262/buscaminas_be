import { getRepository } from 'typeorm';
import { Request, Response } from 'express'
import { User } from '../entity/User'
import { CreateUserDto } from '../dtos/create-user.dto';
import { transformAndValidateSync } from 'class-transformer-validator';
import { validate } from '../common/validate';

export default class UserController {

    static newUser = async (req: Request, res: Response) => {
        const userRepository = getRepository(User);
        let dto: CreateUserDto;

        try {
            dto = transformAndValidateSync(CreateUserDto, req.body, { validator: { whitelist: true } }) as CreateUserDto;
        } catch (errors) {
            return res.status(400).send({ message: validate(errors) });
        }

        const userExist = await userRepository.findOne({ email: dto.email });
        if (userExist) {
            return res.status(200).send({ isOk: false, message: 'Ya existe un usuario con ese email' });
        }

        const user = userRepository.create(dto);
        try {
            await userRepository.save(user);
            
        } catch (e) {
            return res.status(500).send({ message: 'Error de servidor' });
        }

        return res.status(200).send({isOk: true, message: 'Usuario creado correctamente' });
    }

}

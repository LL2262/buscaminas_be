import { getRepository } from 'typeorm';
import { Request, Response } from 'express'
import { User } from '../entity/User'
import jwt from '../services/jwt';

export default class AuthController {

    static login = async (req: Request, res: Response) => {
        const { email, password } = req.body;

        if (!(email && password)) {
            return res.status(400).send({ message: 'El email y el password son requeridos' });
        }

        const userReository = getRepository(User);


        const user = await userReository.createQueryBuilder('user')
            .where('user.email = :email', { email })
            .addSelect('user.password')
            .getOne();


        if (user) {
            if (!user.checkPassword(password)) {
                return res.status(404).send({ message: 'Email y/o password incorrectos' });
            }
        } else {
            return res.status(400).send({ message: 'Email y/o password incorrectos' });
        }

        res.status(200).send({ isOk: true, token: jwt.createToken(user) });
    }
}

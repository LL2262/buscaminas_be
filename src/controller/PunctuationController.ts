import { getRepository } from 'typeorm';
import { Request, Response } from 'express'
import { transformAndValidateSync } from 'class-transformer-validator';
import { validate } from '../common/validate';
import { Punctuation } from '../entity/Punctuation';
import { CreatePunctuationDto } from '../dtos/create-punctuation.dto';


export default class PunctuationController {

    static getAll = async (req: Request, res: Response) => {
        const punctuationRepository = getRepository(Punctuation);
        let entidad: Punctuation[];

        entidad = await punctuationRepository.createQueryBuilder('punctuation')
            .where('punctuation.active = true')
            .andWhere('punctuation.idUser = '+req.body.user.id)
            .orderBy('punctuation.id', 'DESC')
            .getMany();

        return res.status(200).send({ entidad });
    }


    static newPunctuation = async (req: Request, res: Response) => {
        const punctuationRepository = getRepository(Punctuation);

        let dto: CreatePunctuationDto;
        req.body.idUser = req.body.user.id;

        try {
            dto = transformAndValidateSync(CreatePunctuationDto, req.body, { validator: { whitelist: true } }) as CreatePunctuationDto;
        } catch (errors) {
            return res.status(400).send({ message: validate(errors) });
        }

        const punctuation = punctuationRepository.create(dto);

        try {
            await punctuationRepository.save(punctuation);
        } catch (e) {
            return res.status(500).send({ message: 'Error de servidor' });
        }

        return res.status(200).send({ isOk: true, message: 'Se guardo la puntuación del juego' });
    }


}

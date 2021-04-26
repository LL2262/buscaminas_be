"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const class_transformer_validator_1 = require("class-transformer-validator");
const validate_1 = require("../common/validate");
const Punctuation_1 = require("../entity/Punctuation");
const create_punctuation_dto_1 = require("../dtos/create-punctuation.dto");
class PunctuationController {
}
exports.default = PunctuationController;
PunctuationController.getAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const punctuationRepository = typeorm_1.getRepository(Punctuation_1.Punctuation);
    let entidad;
    entidad = yield punctuationRepository.createQueryBuilder('punctuation')
        .where('punctuation.active = true')
        .andWhere('punctuation.idUser = ' + req.body.user.id)
        .orderBy('punctuation.id', 'DESC')
        .getMany();
    return res.status(200).send({ entidad });
});
PunctuationController.newPunctuation = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const punctuationRepository = typeorm_1.getRepository(Punctuation_1.Punctuation);
    let dto;
    req.body.idUser = req.body.user.id;
    try {
        dto = class_transformer_validator_1.transformAndValidateSync(create_punctuation_dto_1.CreatePunctuationDto, req.body, { validator: { whitelist: true } });
    }
    catch (errors) {
        return res.status(400).send({ message: validate_1.validate(errors) });
    }
    const punctuation = punctuationRepository.create(dto);
    try {
        yield punctuationRepository.save(punctuation);
    }
    catch (e) {
        return res.status(500).send({ message: 'Error de servidor' });
    }
    return res.status(200).send({ isOk: true, message: 'Se guardo la puntuación del juego' });
});

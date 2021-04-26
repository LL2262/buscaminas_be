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
const User_1 = require("../entity/User");
const create_user_dto_1 = require("../dtos/create-user.dto");
const class_transformer_validator_1 = require("class-transformer-validator");
const validate_1 = require("../common/validate");
class UserController {
}
exports.default = UserController;
UserController.newUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userRepository = typeorm_1.getRepository(User_1.User);
    let dto;
    try {
        dto = class_transformer_validator_1.transformAndValidateSync(create_user_dto_1.CreateUserDto, req.body, { validator: { whitelist: true } });
    }
    catch (errors) {
        return res.status(400).send({ message: validate_1.validate(errors) });
    }
    const userExist = yield userRepository.findOne({ email: dto.email });
    if (userExist) {
        return res.status(200).send({ isOk: false, message: 'Ya existe un usuario con ese email' });
    }
    const user = userRepository.create(dto);
    try {
        yield userRepository.save(user);
    }
    catch (e) {
        return res.status(500).send({ message: 'Error de servidor' });
    }
    return res.status(200).send({ isOk: true, message: 'Usuario creado correctamente' });
});

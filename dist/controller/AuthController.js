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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const User_1 = require("../entity/User");
const jwt_1 = __importDefault(require("../services/jwt"));
class AuthController {
}
exports.default = AuthController;
AuthController.login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    if (!(email && password)) {
        return res.status(400).send({ message: 'El email y el password son requeridos' });
    }
    const userReository = typeorm_1.getRepository(User_1.User);
    const user = yield userReository.createQueryBuilder('user')
        .where('user.email = :email', { email })
        .addSelect('user.password')
        .getOne();
    if (user) {
        if (!user.checkPassword(password)) {
            return res.status(404).send({ message: 'Email y/o password incorrectos' });
        }
    }
    else {
        return res.status(400).send({ message: 'Email y/o password incorrectos' });
    }
    res.status(200).send({ isOk: true, token: jwt_1.default.createToken(user) });
});

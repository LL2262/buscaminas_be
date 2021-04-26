"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jwt_simple_1 = __importDefault(require("jwt-simple"));
const moment_1 = __importDefault(require("moment"));
const config_1 = require("../common/config");
class Jwt {
}
exports.default = Jwt;
Jwt.createToken = (usuario) => {
    let user;
    user = usuario;
    let payload = {
        id: user.id,
        email: user.email,
        name: user.name,
        lastName: user.lastName,
        iat: moment_1.default().add(1, 'hour').unix(),
        //iat: moment().unix(),
        //exp: moment().add(1, 'minutes').unix()
    };
    return jwt_simple_1.default.encode(payload, config_1.secret_token, 'HS512');
};

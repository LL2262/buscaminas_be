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
exports.authenticated = void 0;
const jwt_simple_1 = __importDefault(require("jwt-simple"));
const moment_1 = __importDefault(require("moment"));
const config_1 = require("../common/config");
const authenticated = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.headers.authorization) {
        return res.status(401).json({ message: 'El token no es valido' });
    }
    var token = req.headers.authorization.split(" ")[1];
    try {
        var payload = jwt_simple_1.default.decode(token, config_1.secret_token);
        if (payload.iat <= moment_1.default().unix()) {
            return res.status(401).json({ message: 'El token a expirado' });
        }
    }
    catch (ex) {
        return res.status(401).json({ message: 'El token no es valido' });
    }
    req.body.user = payload;
    next();
});
exports.authenticated = authenticated;

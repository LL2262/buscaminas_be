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
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const index_1 = __importDefault(require("./routes/index"));
const PORT = process.env.PORT || 3000;
typeorm_1.createConnection().then(() => __awaiter(void 0, void 0, void 0, function* () {
    // Create express app
    const app = express_1.default();
    // Middlewares
    app.use(cors_1.default());
    app.use(express_1.default.json());
    // Routes
    app.use('/api', index_1.default);
    // Start express server
    app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
})).catch(error => console.log(error));

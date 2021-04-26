"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePunctuationDto = void 0;
const class_validator_1 = require("class-validator");
class CreatePunctuationDto {
}
__decorate([
    class_validator_1.IsString({ message: 'La hora de inicio es requerida' }),
    __metadata("design:type", String)
], CreatePunctuationDto.prototype, "startGame", void 0);
__decorate([
    class_validator_1.IsString({ message: 'La hora fin es requerida' }),
    __metadata("design:type", String)
], CreatePunctuationDto.prototype, "finishGame", void 0);
__decorate([
    class_validator_1.IsNumber({}, { message: 'El tiempo total es requerido' }),
    __metadata("design:type", Number)
], CreatePunctuationDto.prototype, "totalTime", void 0);
__decorate([
    class_validator_1.IsBoolean({ message: 'El estado del juego es requerido' }),
    __metadata("design:type", Boolean)
], CreatePunctuationDto.prototype, "stateGame", void 0);
__decorate([
    class_validator_1.IsString({ message: 'La dificultad es requerida' }),
    __metadata("design:type", Object)
], CreatePunctuationDto.prototype, "difficulty", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsNumber(),
    __metadata("design:type", Number)
], CreatePunctuationDto.prototype, "idUser", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsBoolean(),
    __metadata("design:type", Boolean)
], CreatePunctuationDto.prototype, "active", void 0);
exports.CreatePunctuationDto = CreatePunctuationDto;

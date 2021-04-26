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
exports.Punctuation = void 0;
const typeorm_1 = require("typeorm");
const User_1 = require("./User");
let Punctuation = class Punctuation {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Punctuation.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ name: 'start_game' }),
    __metadata("design:type", String)
], Punctuation.prototype, "startGame", void 0);
__decorate([
    typeorm_1.Column({ name: 'finish_game' }),
    __metadata("design:type", String)
], Punctuation.prototype, "finishGame", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Punctuation.prototype, "difficulty", void 0);
__decorate([
    typeorm_1.Column({ name: 'total_time' }),
    __metadata("design:type", Number)
], Punctuation.prototype, "totalTime", void 0);
__decorate([
    typeorm_1.Column({ name: 'state_game', type: 'bool' }),
    __metadata("design:type", Boolean)
], Punctuation.prototype, "stateGame", void 0);
__decorate([
    typeorm_1.Column({ name: 'id_user' }),
    __metadata("design:type", Number)
], Punctuation.prototype, "idUser", void 0);
__decorate([
    typeorm_1.ManyToOne(type => User_1.User, user => user.punctuation),
    typeorm_1.JoinColumn({ name: "id_user", referencedColumnName: "id" }),
    __metadata("design:type", User_1.User)
], Punctuation.prototype, "user", void 0);
__decorate([
    typeorm_1.CreateDateColumn({ name: 'created_at', type: 'timestamp' }),
    __metadata("design:type", Date)
], Punctuation.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.Column({ type: 'bool', default: true }),
    __metadata("design:type", Boolean)
], Punctuation.prototype, "active", void 0);
Punctuation = __decorate([
    typeorm_1.Entity('punctuation')
], Punctuation);
exports.Punctuation = Punctuation;

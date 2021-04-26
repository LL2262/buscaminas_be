"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authenticated_1 = require("../middlwares/authenticated");
const PunctuationController_1 = __importDefault(require("../controller/PunctuationController"));
const router = express_1.Router();
// Get all posts
router.get('/getAll', [authenticated_1.authenticated], PunctuationController_1.default.getAll);
// Create new post
router.post('/create', [authenticated_1.authenticated], PunctuationController_1.default.newPunctuation);
exports.default = router;

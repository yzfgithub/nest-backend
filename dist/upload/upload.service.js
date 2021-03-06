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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const fs_1 = require("fs");
const path_1 = require("path");
const image_entity_1 = require("../entities/image.entity");
const user_entity_1 = require("../entities/user.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
let UploadService = class UploadService {
    constructor(userRepository, imageRepository) {
        this.userRepository = userRepository;
        this.imageRepository = imageRepository;
    }
    async upload(files, body) {
        const user = await this.userRepository.findOne({ 'name': body.username });
        for (const file of files) {
            const url2 = path_1.join(process.cwd(), '../../', '/image/' + file.originalname);
            const writeImage = fs_1.createWriteStream(url2);
            writeImage.write(file.buffer);
            this.imageRepository.save({ user_id: user.user_id, url: file.originalname });
        }
        return '上传成功';
    }
};
UploadService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_2.InjectRepository(user_entity_1.User)), __param(1, typeorm_2.InjectRepository(image_entity_1.Image)),
    __metadata("design:paramtypes", [typeorm_1.Repository, typeorm_1.Repository])
], UploadService);
exports.UploadService = UploadService;
//# sourceMappingURL=upload.service.js.map
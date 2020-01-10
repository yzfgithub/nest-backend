"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const fs_1 = require("fs");
const path_1 = require("path");
let UploadService = class UploadService {
    async upload(files, body) {
        for (const file of files) {
            const url = path_1.join(__dirname, '../../', 'public/upload');
            const writeImage = fs_1.createWriteStream(url);
            writeImage.write(file.buffer);
        }
        return '上传成功';
    }
};
UploadService = __decorate([
    common_1.Injectable()
], UploadService);
exports.UploadService = UploadService;
//# sourceMappingURL=upload.service.js.map
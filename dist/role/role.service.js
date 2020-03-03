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
const role_entity_1 = require("../entities/role.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const api_exception_1 = require("../common/exceptions/api.exception");
const api_error_code_enmu_1 = require("../common/enums/api-error-code.enmu");
let RoleService = class RoleService {
    constructor(roleRepository) {
        this.roleRepository = roleRepository;
    }
    async find() {
        return this.roleRepository.find();
    }
    async create(role) {
        return this.roleRepository.save(role);
    }
    async update(role) {
        let result = await this.roleRepository.findOne(role.id);
        if (result) {
            return this.roleRepository.update({ "id": role.id }, role);
        }
        else {
            return new api_exception_1.ApiException('角色id不存在', api_error_code_enmu_1.ApiErrorCode.ROLE_ID_INVALID, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async delete(id) {
        let role = await this.roleRepository.findOne({
            where: { "id": id }
        });
        if (role) {
            return this.roleRepository.delete(role);
        }
        else {
            return new api_exception_1.ApiException('角色id不存在', api_error_code_enmu_1.ApiErrorCode.ROLE_ID_INVALID, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async getRolesByIds(ids) {
        return await this.roleRepository.findByIds(ids);
    }
};
RoleService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(role_entity_1.Role)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], RoleService);
exports.RoleService = RoleService;
//# sourceMappingURL=role.service.js.map
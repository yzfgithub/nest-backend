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
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("../entities/user.entity");
const typeorm_2 = require("typeorm");
const api_exception_1 = require("../common/exceptions/api.exception");
const api_error_code_enmu_1 = require("../common/enums/api-error-code.enmu");
const role_service_1 = require("../role/role.service");
const role_entity_1 = require("../entities/role.entity");
let UserService = class UserService {
    constructor(userRepository, roleService) {
        this.userRepository = userRepository;
        this.roleService = roleService;
    }
    async find(query) {
        return this.userRepository.find(query);
    }
    async findOne(user_id) {
        return await this.userRepository.findOne({ 'user_id': user_id }, { relations: ['roles'] });
    }
    async create(user) {
        let arr = [];
        if (user.roles.length) {
            arr = user.roles.map((item) => {
                return { role_id: item };
            });
        }
        console.log(arr);
        user.roles = await this.roleService.getRolesByIds(arr);
        return this.userRepository.save(user);
    }
    async update(user) {
        let result = await this.userRepository.findOne(user.user_id);
        if (result) {
            return this.userRepository.update({ "user_id": user.user_id }, user);
        }
        else {
            return new api_exception_1.ApiException('用户id不存在', api_error_code_enmu_1.ApiErrorCode.USER_ID_INVALID, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async bind(param) {
        let result = await this.userRepository.findOne({ "user_id": param.user_id });
        if (result) {
            let arr = [];
            if (param.roles.length) {
                arr = param.roles.map((item) => {
                    return { role_id: item };
                });
            }
            result.roles = await this.roleService.getRolesByIds(arr);
            return this.userRepository.save(result);
        }
        else {
            return new api_exception_1.ApiException('用户id不存在', api_error_code_enmu_1.ApiErrorCode.USER_ID_INVALID, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async remove(user_id) {
        return this.userRepository.delete({ "user_id": user_id });
    }
    async getUserByToken(token) {
        return this.userRepository.find(token);
    }
};
UserService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        role_service_1.RoleService])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map
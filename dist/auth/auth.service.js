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
const common_1 = require("@nestjs/common");
const user_service_1 = require("../user/user.service");
const jwt_1 = require("@nestjs/jwt");
const api_exception_1 = require("../common/exceptions/api.exception");
const api_error_code_enmu_1 = require("../common/enums/api-error-code.enmu");
let AuthService = class AuthService {
    constructor(userService, jwtService) {
        this.userService = userService;
        this.jwtService = jwtService;
    }
    async createToken(phone, password) {
        console.log('gg');
        let result = await this.userService.find({ "phone": phone, "password": password });
        console.log(result, 'result');
        if (result) {
            const expiration = 60 * 60;
            const data = { name: result[0].name, user_id: result[0].user_id };
            const accessToken = this.jwtService.sign(data);
            console.log(accessToken);
            const ret = result[0];
            ret.token = accessToken;
            return {
                ret
            };
        }
        else {
            return new api_exception_1.ApiException("没有", api_error_code_enmu_1.ApiErrorCode.USER_ID_INVALID, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async validateUser(payload) {
        console.log(payload, 'auth.service--');
        return await this.userService.findOne(payload.user_id);
    }
};
AuthService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [user_service_1.UserService,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map
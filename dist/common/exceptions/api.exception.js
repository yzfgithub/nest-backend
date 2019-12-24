"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
class ApiException extends common_1.HttpException {
    constructor(errorMsg, errorCode, statusCode) {
        super(errorMsg, statusCode);
        this.errorMsg = errorMsg;
        this.errorCode = errorCode;
    }
    getErrorCode() {
        return this.errorCode;
    }
    getErrorMessage() {
        return this.errorMsg;
    }
}
exports.ApiException = ApiException;
//# sourceMappingURL=api.exception.js.map
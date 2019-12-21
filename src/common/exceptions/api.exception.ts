import { HttpException, HttpStatus } from '@nestjs/common';
import { ApiErrorCode } from '../enums/api-error-code.enmu'

export class ApiException extends HttpException {
    private errorMsg: string;
    private errorCode: ApiErrorCode;
    constructor(errorMsg: string, errorCode: ApiErrorCode, statusCode: HttpStatus) {
        super(errorMsg, statusCode);
        this.errorMsg = errorMsg;
        this.errorCode = errorCode;
    }
    getErrorCode(): ApiErrorCode {
        return this.errorCode;
    }
    getErrorMessage(): string {
        return this.errorMsg;
    } 
}

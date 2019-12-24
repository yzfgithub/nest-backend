import { HttpException, HttpStatus } from '@nestjs/common';
import { ApiErrorCode } from '../enums/api-error-code.enmu';
export declare class ApiException extends HttpException {
    private errorMsg;
    private errorCode;
    constructor(errorMsg: string, errorCode: ApiErrorCode, statusCode: HttpStatus);
    getErrorCode(): ApiErrorCode;
    getErrorMessage(): string;
}

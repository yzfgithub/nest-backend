import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from '@nestjs/common';
import { ApiException } from '../exceptions/api.exception'

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();
    const status = exception.getStatus();
    if (exception instanceof ApiException) {
      response.status(status).json({
        msg: exception.message,
        errorCode: status,
        data: '',
        url: request.url,
      })
    } else {
      response.status(status).json({
        msg: '未知错误',
        statusCode: status,
        data: '',
        path: request.url
      })
    } 
  }
}

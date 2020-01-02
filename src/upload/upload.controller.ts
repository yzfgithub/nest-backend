import { Controller, Post, UseInterceptors, Body, UploadedFiles,  } from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express'
import { UploadService } from './upload.service';

@Controller('upload')
export class UploadController {
    constructor (private readonly uploadService:UploadService) {}
    @Post()
    @UseInterceptors(FilesInterceptor('file'))
    uploadFile(@UploadedFiles() files, @Body() body) {
        console.log(files, body);
      return this.uploadService.upload(files, body)
    }
}

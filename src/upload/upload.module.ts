import { Module } from '@nestjs/common';
// import { TypeOrmModule } from '@nestjs/typeorm'
import { UploadController } from './upload.controller';
import { UploadService } from './upload.service';
// import { User } from '../entities/user.entity'
// import { Image } from '../entities/image.entity'

@Module({
    // imports:[TypeOrmModule.forFeature([User, Image])],
    controllers: [UploadController],
    providers: [UploadService]
})
export class UploadModule {}

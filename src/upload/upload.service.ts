import { Injectable } from '@nestjs/common';
import { createWriteStream } from 'fs';
import { join } from 'path';
import { Image } from '../entities/image.entity'
import { User } from '../entities/user.entity'
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UploadService {
    constructor(@InjectRepository(User) private readonly userRepository: Repository<User>, @InjectRepository(Image) private readonly imageRepository: Repository<Image>){}
    async upload(files, body) {
        const user = await this.userRepository.findOne({'name': body.username});
        for(const file of files) {
            // const url = '/data/image';
            const url = join(__dirname,'../../', 'public/upload'); // join(__dirname,'../../', 'public/image',${Date.now()}-${file.originalname});
            // const url2 = join(process.cwd(), '../', '/public/upload');
            const writeImage = createWriteStream(url)
            writeImage.write(file.buffer)
            
            this.imageRepository.save({user_id: user.user_id,url: url})
        }
        return '上传成功'
    }
}

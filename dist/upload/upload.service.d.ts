import { Image } from '../entities/image.entity';
import { User } from '../entities/user.entity';
import { Repository } from 'typeorm';
export declare class UploadService {
    private readonly userRepository;
    private readonly imageRepository;
    constructor(userRepository: Repository<User>, imageRepository: Repository<Image>);
    upload(files: any, body: any): Promise<string>;
}

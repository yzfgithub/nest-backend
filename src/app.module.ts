import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { TypeOrmModule } from '@nestjs/typeorm'
// import { RoleModule } from './role/role.module';
// import { UserModule } from './user/user.module';
// import { UploadModule } from './upload/upload.module';

@Module({
  imports: [
    // TypeOrmModule.forRoot({
    //   type: 'mysql',
    //   host: 'localhost',
    //   port: 3306,
    //   username: 'root',
    //   password: 'yanzf',
    //   database:'yanzf',
    //   entities: [__dirname + '/entities/*.entity{.ts,.js}'],
    //   synchronize: true,
    // }),
    // RoleModule,
    // UserModule,
    // UploadModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

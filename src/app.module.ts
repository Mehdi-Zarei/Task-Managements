import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ProjectModule } from './project/project.module';
import { TaskModule } from './task/task.module';
import { CategoryModule } from './category/category.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      database: 'Task-Management',
      username: 'postgres',
      password: '123',
      synchronize: true,
      entities: [__dirname + '/**/entities/*.entity.{ts,js}'],
    }),
    UserModule,
    ProjectModule,
    TaskModule,
    CategoryModule,
  ],
})
export class AppModule {}

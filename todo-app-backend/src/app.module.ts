import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoModule } from './app/todo/todo.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mariadb',
        host: configService.get('MYSQL_HOST', 'localhost'),
        port: Number(configService.get('MYSQL_PORT', 3306)),
        username: configService.get('MYSQL_USER', 'root'),
        password: configService.get('MARIADB_ROOT_PASSWORD', '123'),
        database: configService.get('MYQL_DATABASE', 'todo'),
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: true,
      }),
    }),
    TodoModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeORMConfig: TypeOrmModuleOptions = {
  // Database Type
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'mojo',
  password: '',
  database: 'prac',
  // Entities to be loaded for this connection
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
};

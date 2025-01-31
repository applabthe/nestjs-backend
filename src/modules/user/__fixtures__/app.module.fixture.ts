import { Module } from '@nestjs/common';
import { CacheModule } from '@nestjs/cache-manager';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { loggerConfig } from '../../../config/logger.config';
import { UserModule } from '../user.module';
import { ormConfig } from './ormconfig.fixture';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [loggerConfig],
    }),
    TypeOrmModule.forRoot(ormConfig),
    CacheModule.register({
      isGlobal: true,
    }),
    UserModule,
  ],
})
export class AppModuleFixture {}

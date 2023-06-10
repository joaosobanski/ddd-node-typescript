import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './app/controller/user.controller';
import { AuthMiddleware } from './infra/auth/auth.middleware';
import { UsersModule } from './infra/ioc.module/users.module'
import Config from './infra/typeorm.config';

@Module({
  imports: [TypeOrmModule.forRoot(Config()), UsersModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      // exemplo do nest.js
      // .exclude(
      //   { path: 'cats', method: RequestMethod.GET },
      //   { path: 'cats', method: RequestMethod.POST },
      //   'cats/(.*)',
      // )
      .forRoutes(UsersController);
  }
}

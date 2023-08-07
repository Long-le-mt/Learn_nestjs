import { Module } from '@nestjs/common';
import { CatsController } from './cats/cats.controller';
import { CatsService } from './cats/cats.service';
import { LoggerService } from './cats/logger.service';

@Module({
  controllers: [CatsController],
  providers: [CatsService, LoggerService],
})

export class AppModule {}

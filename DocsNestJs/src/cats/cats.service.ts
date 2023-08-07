import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cats.interface';
import { ParentService } from './parent.service';
import { LoggerService } from './logger.service';

@Injectable()
export class CatsService extends ParentService {
  private readonly cats: Cat[] = [];

  create(cat: Cat) {
    this.cats.push(cat);
  }

  findAll(): Cat[] {
    return this.cats;
  }

  testLog(): void {
    this.loggerService.log("Đây là log");
    console.log('Test log');
  }

}

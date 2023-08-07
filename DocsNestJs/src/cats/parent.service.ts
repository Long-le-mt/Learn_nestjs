import { Inject, Injectable } from '@nestjs/common';
import { LoggerService } from './logger.service';

@Injectable()
export class ParentService {
//   constructor(protected readonly loggerService: LoggerService) {}
  // Property-based injection for LoggerService
  @Inject() 
  protected readonly loggerService: LoggerService;
}

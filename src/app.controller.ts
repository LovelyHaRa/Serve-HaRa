import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CountingWordDto } from './dto';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(['', 'hello'])
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('counting-word')
  getCountWord(@Body() countingWordDto: CountingWordDto) {
    const { sentence } = countingWordDto;
    const length = sentence.length;
    const excepBlanktLength = sentence.replace(/\s+/g, '').length;
    const countWord = sentence.split(/\s+/g).length;

    return {
      length,
      excepBlanktLength,
      countWord,
    };
  }
}

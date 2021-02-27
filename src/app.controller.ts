import { Controller, Get, Post, Query, Req } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(['', 'hello'])
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('counting-word')
  countingWord(
    @Req() request?,
  ): {
    length: number;
    excepBlanktLength: number;
    countWord: number;
  } {
    const { sentence } = request.body;
    return this.appService.getCountWord(sentence);
  }

  @Post('hex-to-rgb')
  hexToRgb(@Req() request?): { red: number; green: number; blue: number } {
    const { hexCode } = request.body;

    try {
      return this.appService.convertHexToRgb(hexCode);
    } catch (error) {
      throw error;
    }
  }

  @Get('hex-to-rgb')
  getHexToRgb(
    @Query('hexCode') hexCode?,
  ): { red: number; green: number; blue: number } {
    try {
      return this.appService.convertHexToRgb(hexCode);
    } catch (error) {
      throw error;
    }
  }
}

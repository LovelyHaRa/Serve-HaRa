import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CountingWordDto, HexToRgbDto } from './dto';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(['', 'hello'])
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('counting-word')
  countingWord(
    @Body() countingWordDto: CountingWordDto,
  ): {
    length: number;
    excepBlanktLength: number;
    countWord: number;
  } {
    const { sentence } = countingWordDto;
    return this.appService.getCountWord(sentence);
  }

  @Post('hex-to-rgb')
  hexToRgb(
    @Body() hexToRgb: HexToRgbDto,
  ): { red: number; green: number; blue: number } {
    const { hexCode } = hexToRgb;

    try {
      return this.appService.convertHexToRgb(hexCode);
    } catch (error) {
      throw error;
    }
  }
}

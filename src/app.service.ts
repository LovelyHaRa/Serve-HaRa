import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Serve HaRa';
  }

  getCountWord(
    sentence: string,
  ): {
    length: number;
    excepBlanktLength: number;
    countWord: number;
  } {
    const length = sentence.length;
    const excepBlanktLength = sentence.replace(/\s+/g, '').length;
    const countWord = sentence.split(/\s+/g).length;

    return {
      length,
      excepBlanktLength,
      countWord,
    };
  }

  convertHexToRgb(
    hexCode: string,
  ): { red: number; green: number; blue: number } {
    const hex = hexCode.split('#').slice(-1)[0];
    return {
      red: parseInt(hex.substr(0, 2), 16),
      green: parseInt(hex.substring(2, 4), 16),
      blue: parseInt(hex.substring(4), 16),
    };
  }
}

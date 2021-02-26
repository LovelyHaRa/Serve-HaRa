import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

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

    const isValid = /^([0-9A-Fa-f]{6}|[0-9A-Fa-f]{3})$/.test(hex);

    if (!isValid) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'Invalid color code',
        },
        HttpStatus.BAD_REQUEST,
      );
    }
    const nextHex =
      hex.length === 3
        ? hex
            .split('')
            .reduce(
              (accumulator: string, currentValue: string) =>
                accumulator.concat(currentValue.repeat(2)),
              '',
            )
        : hex;

    return {
      red: parseInt(nextHex.substr(0, 2), 16),
      green: parseInt(nextHex.substring(2, 4), 16),
      blue: parseInt(nextHex.substring(4), 16),
    };
  }
}

import { BadRequestException, HttpException, HttpStatus } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('app', () => {
    it('should return hello message', () => {
      expect(appController.getHello()).toBe('Serve HaRa');
    });

    describe('counting-word', () => {
      it('should be return length of context', () => {
        const sentence = 'Lovely Front End Developer and  Mixologist';
        expect(
          appController.countingWord({ body: { sentence } }),
        ).toStrictEqual({
          length: 42,
          excepBlanktLength: 36,
          countWord: 6,
        });
      });
    });

    describe('hex-to-rgb', () => {
      it('should be return rgb code', () => {
        const hexCode = '#3bc9db';
        const result = {
          red: 59,
          green: 201,
          blue: 219,
        };

        expect(appController.hexToRgb({ body: { hexCode } })).toStrictEqual(
          result,
        );

        expect(appController.getHexToRgb(hexCode)).toStrictEqual(result);
      });

      it('should be throw exception', () => {
        const invalidHexCode = [
          'LOVELY',
          '#Lovely',
          '#LovelyHaRa',
          '#FE',
          '0001',
          '#1',
          'AceFE',
        ];

        invalidHexCode.forEach((hexCode) => {
          expect(() => appController.hexToRgb({ body: { hexCode } })).toThrow(
            HttpException,
          );

          expect(() => appController.getHexToRgb(hexCode)).toThrow(
            HttpException,
          );
        });
      });
    });
  });
});

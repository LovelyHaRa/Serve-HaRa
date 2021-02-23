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

    it('should be return length of context', () => {
      const sentence = 'Lovely Front End Developer and  Mixologist';
      expect(appController.getCountWord({ sentence })).toStrictEqual({
        length: 42,
        excepBlanktLength: 36,
        countWord: 6,
      });
    });
  });
});

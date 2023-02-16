import { Test, TestingModule } from '@nestjs/testing';
import { SociétéController } from './société.controller';
import { SociétéService } from './société.service';

describe('SociétéController', () => {
  let controller: SociétéController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SociétéController],
      providers: [SociétéService],
    }).compile();

    controller = module.get<SociétéController>(SociétéController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { AbonnéController } from './abonné.controller';
import { AbonnéService } from './abonné.service';

describe('AbonnéController', () => {
  let controller: AbonnéController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AbonnéController],
      providers: [AbonnéService],
    }).compile();

    controller = module.get<AbonnéController>(AbonnéController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

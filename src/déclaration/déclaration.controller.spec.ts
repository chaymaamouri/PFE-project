import { Test, TestingModule } from '@nestjs/testing';
import { DéclarationController } from './déclaration.controller';
import { DéclarationService } from './déclaration.service';

describe('DéclarationController', () => {
  let controller: DéclarationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DéclarationController],
      providers: [DéclarationService],
    }).compile();

    controller = module.get<DéclarationController>(DéclarationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

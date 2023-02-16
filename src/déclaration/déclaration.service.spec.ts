import { Test, TestingModule } from '@nestjs/testing';
import { DéclarationService } from './déclaration.service';

describe('DéclarationService', () => {
  let service: DéclarationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DéclarationService],
    }).compile();

    service = module.get<DéclarationService>(DéclarationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

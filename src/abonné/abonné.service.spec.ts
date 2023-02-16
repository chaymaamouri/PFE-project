import { Test, TestingModule } from '@nestjs/testing';
import { AbonnéService } from './abonné.service';

describe('AbonnéService', () => {
  let service: AbonnéService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AbonnéService],
    }).compile();

    service = module.get<AbonnéService>(AbonnéService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

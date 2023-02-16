import { Test, TestingModule } from '@nestjs/testing';
import { SociétéService } from './société.service';

describe('SociétéService', () => {
  let service: SociétéService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SociétéService],
    }).compile();

    service = module.get<SociétéService>(SociétéService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

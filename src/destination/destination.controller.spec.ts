import { Test, TestingModule } from '@nestjs/testing';
import { DestinyController } from './destiny.controller';

describe('Destiny Controller', () => {
  let controller: DestinyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DestinyController],
    }).compile();

    controller = module.get<DestinyController>(DestinyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

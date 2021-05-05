import { Test, TestingModule } from '@nestjs/testing';
import { App } from './app';

describe('App', () => {
  let provider: App;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [App],
    }).compile();

    provider = module.get<App>(App);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});

import { ComicsModule } from './comics.module';

describe('ComicModule', () => {
  let comicModule: ComicsModule;

  beforeEach(() => {
    comicModule = new ComicsModule();
  });

  it('should create an instance', () => {
    expect(comicModule).toBeTruthy();
  });
});

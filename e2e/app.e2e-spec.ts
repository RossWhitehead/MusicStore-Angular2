import { MusicStoreAngular2Page } from './app.po';

describe('music-store-angular2 App', () => {
  let page: MusicStoreAngular2Page;

  beforeEach(() => {
    page = new MusicStoreAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

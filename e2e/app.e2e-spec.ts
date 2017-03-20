import { AolngPage } from './app.po';

describe('aolng App', () => {
  let page: AolngPage;

  beforeEach(() => {
    page = new AolngPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

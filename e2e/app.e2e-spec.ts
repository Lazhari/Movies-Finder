import { MoviesfinderPage } from './app.po';

describe('moviesfinder App', function() {
  let page: MoviesfinderPage;

  beforeEach(() => {
    page = new MoviesfinderPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

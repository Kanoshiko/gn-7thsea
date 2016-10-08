import { Gn7thseaPage } from './app.po';

describe('gn-7thsea App', function() {
  let page: Gn7thseaPage;

  beforeEach(() => {
    page = new Gn7thseaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

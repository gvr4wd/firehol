import { FileholPage } from './app.po';

describe('filehol App', () => {
  let page: FileholPage;

  beforeEach(() => {
    page = new FileholPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

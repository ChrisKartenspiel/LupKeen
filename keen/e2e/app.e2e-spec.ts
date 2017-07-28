import { KeenPage } from './app.po';

describe('keen App', () => {
  let page: KeenPage;

  beforeEach(() => {
    page = new KeenPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

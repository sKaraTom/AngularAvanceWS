import { AngAvanceWSPage } from './app.po';

describe('ang-avance-ws App', () => {
  let page: AngAvanceWSPage;

  beforeEach(() => {
    page = new AngAvanceWSPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

import { EtiennePage } from './app.po';

describe('etienne App', () => {
  let page: EtiennePage;

  beforeEach(() => {
    page = new EtiennePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

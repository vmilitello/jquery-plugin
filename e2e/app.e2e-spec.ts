import { JqueryPluginPage } from './app.po';

describe('jquery-plugin App', function() {
  let page: JqueryPluginPage;

  beforeEach(() => {
    page = new JqueryPluginPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

import { ServicosPage } from './app.po';

describe('servicos App', () => {
  let page: ServicosPage;

  beforeEach(() => {
    page = new ServicosPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});

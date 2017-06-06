import { RotasPage } from './app.po';

describe('rotas App', () => {
  let page: RotasPage;

  beforeEach(() => {
    page = new RotasPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});

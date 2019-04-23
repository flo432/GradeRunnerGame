import { GradeRunnersPage } from './app.po';

describe('grade-runners App', function() {
  let page: GradeRunnersPage;

  beforeEach(() => {
    page = new GradeRunnersPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

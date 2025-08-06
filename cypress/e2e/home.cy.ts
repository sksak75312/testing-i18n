describe('首頁', () => {
  it('繁體中文', () => {
  cy.visit('/zh-hant');
  cy.contains('首頁')
  })
})
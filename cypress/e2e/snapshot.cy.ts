describe('I18n Visual Testing', () => {
  it('繁體中文首頁', () => {
    cy.visit('/zh-hant');
    cy.get('p').should('contain', '首頁')
    cy.percySnapshot('HomePage');

  })

  it('繁體中文產品頁', () => {
    cy.visit('/zh-hant/products');
    cy.get('p').should('contain', '產品')
    cy.percySnapshot('ProductPage');
  })
})

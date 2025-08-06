describe("產品頁面", () => {
  it('繁體中文', () => {
    cy.visit('/zh-hant/products');
    cy.contains('產品');
  })

  it('英文', () => {
    cy.visit('/en/products');
    cy.contains('products');
  })
})
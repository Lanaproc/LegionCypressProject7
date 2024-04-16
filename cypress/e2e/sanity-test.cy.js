///<reference types = "Cypress"/>

describe('The sanity test for the consumers energy page', () => {

  const title_home = '.about-lrt > :nth-child(1)'
  const home = '[id="menu-item-31"]'
   const about = '[id="menu-item-36"]'
  const products = '[id="menu-item-32"]'
  const services = '[id="menu-item-34"]'
  const tools = '[id="menu-item-35"]'
  const promotions = '[id="menu-item-673"]'
  const careers = '[id="menu-item-1589"]'
  const blog = '[id="menu-item-1725"]'
  const questions = '[id="menu-item-1727"]'
  const contact = '[id="menu-item-1726"]'

  before(() => {
    cy.visit('https://consumersenergymanagement.ca/')
  })

  let my_url = 'https://consumersenergymanagement.ca/'



  it('navigate to the main page', () => {
    cy.visit(my_url)
    cy.url().should('eq', my_url)
  })

  it('navigate to the Home page', () => {
    cy.get(home).click()
    cy.get(title_home).should('be.visible')
   
  })

  it('Navigate to the About page', () => {
    cy.get(about).click()
    cy.get('h1').should('be.visible')
    cy.go('back')
  })

  it('navigate to the Products page', () => {
    cy.get(products).click()
    cy.get('h1').should('be.visible')
    cy.go('back')
  })

  it('navigate to the Services page', () => {
    cy.get(services).click()
    cy.get('h1').should('be.visible')
    cy.go('back')
  })

  it('navigate to the Tools page', () => {
    cy.get(tools).click()
    cy.get('h1').should('be.visible')
    cy.go('back')
  })

  it('navigate to the Promotions page', () => {
    cy.get(promotions).click()
    cy.get('h1').should('be.visible')
    cy.go('back')
  })

  it('navigate to the Careers page', () => {
    cy.get(careers).click()
    cy.get('h1').should('be.visible')
    cy.go('back')
  })
  
  it('navigate to the Blog page', () => {
    cy.get(blog).click()
    cy.get('h1').should('be.visible')
    cy.go('back')
  })

  it('navigate to the Questions page', () => {
    cy.get(questions).click()
    cy.get('h1').should('be.visible')
    cy.go('back')
  })

  it('navigate to the Contact page', () => {
    cy.get(contact).click()
    cy.get('h1').should('be.visible')
    cy.go('back')
  })
})
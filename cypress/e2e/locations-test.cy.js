///<reference types = "Cypress"/>
import { data } from '../fixtures/locations.json'

describe('Savings calculator - location test', () => {

    const select_state = '[name="nastates"]'
    const select_city = '[name="stage2"]'

    it('navigate to the savings calculator page', () => {
        cy.visit('https://consumersenergymanagement.ca/savings-calculator/')
    })

    it('verify that any Canadian province and city can be chosen from the list', () => {

        data.forEach(element => {
            cy.get(select_state).select(element.state)
            cy.get(select_city).select(element.city)
        })
    })

})
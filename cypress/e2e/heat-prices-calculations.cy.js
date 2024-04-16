///<reference types = "Cypress"/>
import { data } from '../fixtures/current-system.json'
import { new_data } from '../fixtures/new_system.json'

describe('Calculation for the current and new heating systems', () => {

    const curr_heater_system_element_name = '[name="heattype"]'
    const floors = '[name="stories"]'
    const square_feet = '[name="squarefeet"]'
    const years = '[name="houseage"]'
    const new_heater_system_element_name = '[name="heatingtype"]'

    it('navigate to the savings calculator page', () => {
        cy.visit('https://consumersenergymanagement.ca/savings-calculator/')
    })

    it('Step 1 - Popilate all the fields', () => {
        cy.get('[name="nastates"]').select('Ontario').invoke('val').should('eq', 'Ontario')
        cy.get('[name=stage2]').select('Toronto').invoke('text').should('contain', 'Toronto')
        cy.get(floors).select('1').invoke('val').should('eq', '1')
        cy.get(square_feet).select('500').invoke('val').should('eq', '500')
        cy.get(years).type('1').invoke('val').should('eq', '1')
    })

    
    it('Step 2 - Current heating system', () => {
        // Works
        cy.get(curr_heater_system_element_name).select('Current Heater')

        // Select doesn't work. Value changed in dropdown, but error thrown by cy
        cy.get(curr_heater_system_element_name).select('Natural Gas')
    })


    // it('Step 2 - Current heating system', () => {
    //     data.forEach(element => {
    //         cy.get(curr_heater_system_element_name).select(element.system)
    //     })
    // })

    // it('Step 2 - New heating system', () => {
    //     data.forEach(element => {
    //         cy.get(new_heater_system_element_name).select(element.system)
    //     })
    // })

    // it('Step 2 - Current heating system', () => {
    //     cy.get('#heattype').select('Natural Gas').invoke('text').should('eq', 'Natural Gas')
    // })


})




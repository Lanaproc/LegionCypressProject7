///<reference types = "Cypress"/>
import { data } from '../fixtures/current-system.json'
import { new_data } from '../fixtures/new_system.json'

describe('Calculation for the current and new heating systems', () => {

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })

    const curr_heater_system_element_name = '[name="heattype"]'
    const floors = '[name="stories"]'
    const square_feet = '[name="squarefeet"]'
    const years = '[name="houseage"]'
    const new_heater_system_element_name = '[name="heatingtype"]'
    const curr_heating_cost = '[id="CHC"]'
    const new_heating_cost = '[id="NHC"]'
    const annual_heting_savings = '[id="AHS"]'


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
        data.forEach(element => {
            cy.get(curr_heater_system_element_name).select(element.system).should('be.visible')
            cy.get(curr_heating_cost).should('have.value', '')
        })
    })

    it('Step 2 - New heating system', () => {
        data.forEach(element => {
            cy.get(new_heater_system_element_name).select(element.system).should('be.visible')
            //cy.get(new_heater_system_element_name).select(element.system)
            cy.get(new_heating_cost).should('have.value', '')
        })
    })
    it('Verify that savings are displayed', () => {
        cy.get(curr_heater_system_element_name).select('Propane').invoke('text').should('contain', 'Propane')
        cy.get(new_heater_system_element_name).select('Electric').invoke('text').should('contain', 'Electric')
        cy.get(annual_heting_savings).should('have.value', '')
    })

    it('Total savinsa update', () => {
        cy.get('[id="VTAS"]').should('have.value', '')
        cy.get('[id="VTES"]').should('have.value', '')
    })
})




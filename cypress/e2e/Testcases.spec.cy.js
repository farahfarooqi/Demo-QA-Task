/// <reference types="cypress" /> 
import 'cypress-file-upload'
describe('Task 1 specs', () => {
    it('T1', () => {
      cy.visit('https://demoqa.com/automation-practice-form')
      
      
      cy.get('#firstName').type('Asif')
      cy.get('#lastName').type('ali')
      cy.get('#userEmail').type('gfds@gmail.com')

    // radio buttons
    cy.get('#genterWrapper > .col-md-9 > :nth-child(2)').click()

     // mobile number
    cy.get('#userNumber').type('1234567895')

     //date of birth

     //cy.get('#dateOfBirthInput').type('21 March 2022')

     // subjects
     cy.get('#subjectsInput').type('Computer Science{enter}')
     

     //check boxes
      cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(1)').click()

    //picture
     const P ='image.png'
     cy.get('#uploadPicture').attachFile(P)
     // text area
     cy.get('#currentAddress').type("house#56 street#98 jafar abad")

     //dropdowns
     cy.get('#stateCity-wrapper').find('#state').find('.css-yk16xz-control').click()
     cy.get('#react-select-3-option-1').click()
     cy.get('#stateCity-wrapper').find('#city').find('.css-1hwfws3').click()
     cy.get('#react-select-4-option-1').click()

    // submit
    cy.get('#submit').click()
    
    
    })
  })
/// <reference types="Cypress" />

import { faker } from '@faker-js/faker';
import {login} from '../page_objects/LoginPOM'
import {boards} from '../page_objects/BoardsPOM'
import {headers} from '../page_objects/Headers'

let token
let boardId

describe('Login test cases', ()=>{


before('Go login page', ()=>{

    cy.visit('/login')
    cy.url().should('contain', 'https://cypress.vivifyscrum-stage.com/login')
    
    })

    it('Login', ()=>{
        cy.intercept('POST', 'https://cypress-api.vivifyscrum-stage.com/api/v2/login').as('validLogin')

        login.login()
        cy.url().should('contain', 'my-organizations')

        cy.wait('@validLogin').then(intercept=>{
            token = intercept.response.body.token
            Cypress.env('token', token)
            window.localStorage.setItem('token', token)
            expect(intercept.response.statusCode).to.eq(200)
            })

    })

    it('add board', ()=>{
        boards.addNewBoard()
            headers.header2.should('contain', 'New Board')
            cy.intercept('POST', 'https://cypress-api.vivifyscrum-stage.com/api/v2/boards').as('createBoard')
            boards.createBoard()
            cy.wait('@createBoard').then(intercept=>{
                boardId = intercept.response.body.id
                Cypress.env('boardId', boardId)
            })
        
    })

it ('edit board', ()=>{

    boards.clickConfig()
    cy.url().should('contain', '/settings')
    boards.editBoard()
    boards.SuccessfulUpdate.should('exist')
    .and('have.text', 'Successfully updated the Board Basic Info.')
    


})

it('delete board', ()=>{
    cy.request({ 
        method: 'DELETE',
        url: `https://cypress-api.vivifyscrum-stage.com/api/v2/boards/${Cypress.env('boardId')}`,
        
        headers: { authorization: `Bearer ${Cypress.env('token')}`}

    }).then(resp=>{
        expect(resp.status).to.eq(200)
       })



})

it ('logout', ()=>{
    boards.logOut()
    login.email.should('exist')
    login.password.should('exist')
})


})
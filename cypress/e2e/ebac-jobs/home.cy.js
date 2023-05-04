/// <reference types="cypress" />

describe('Testes para a Home', () =>{
    it('deve renderizar 4 vagas', () => {
        cy.visit('https://ebac-jobs-e2e.vercel.app/')
        cy.get('.ListaVagas_vagas__gmNZn > li').should('have.length', 4)
    })
    it('deve filtrar por fullstack', () =>{
        cy.visit('https://ebac-jobs-e2e.vercel.app/')
        cy.get('.FormVagas_campo__E1ppF').type('fullstack{enter}')
        cy.get('button[type="submit"]').click()
    })
}) 



//Para instalar o Cypress
//npm install --save-dev cypress@12.6.0
//Verificar a versão mais atual

//Para executar/Abrir o Cypress
// > npm run cypress open
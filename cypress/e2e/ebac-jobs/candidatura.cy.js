/// <reference types="cypress" />

describe('Testes para a pagina de candidatura', () =>{
    // beforeEach(() => {
    //     cy.visit('https://ebac-jobs-e2e.vercel.app/')
    // })

    it('deve levar o usuário até o formulário de inscrição', () => {
        cy.visit('https://ebac-jobs-e2e.vercel.app/')
        cy.get('.Vaga_vagaLink__DeFkk').first().click()
        cy.get('input').should('have.length', 7)
    })

    it('Deve preencher o formulário de inscrição', () => {
        cy.visit('https://ebac-jobs-e2e.vercel.app/')
        cy.get('.Vaga_vagaLink__DeFkk').first().click()
        cy.get('input[name="nome-completo"]').type('Danilo Azevedo')
        cy.get('input[name="email"]').type('danilo-sa@live.com')
        cy.get('input[name="telefone"]').type('8412345678910')
        cy.get('input[name="endereco"]').type('Av do dinheiro, 555')
        cy.get('#linux').check()
        cy.get('select[name="escolaridade"]').select('outros')
        cy.get('.Aplicacao_button__tw2AE').click()

        cy.on('window:alert', (conteudo)=> {
            expect(conteudo).contain('obrigado pela canidatura!')
        })
    })
}) 

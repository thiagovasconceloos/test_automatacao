/// <reference types="cypress" />

export class Carrinho {
    constructor(){
        this.click_comprar = 'Comprar'
        this.click_continuar = 'Continuar'
    }

 
    clickComprar = () => cy.contains(this.click_comprar).click()
    clickContinuar = () => cy.contains(this.click_continuar).click()
}
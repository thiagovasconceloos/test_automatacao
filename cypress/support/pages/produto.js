/// <reference types="cypress" />

export class Produto {
    constructor(){
        this.buscarproduto = '#strBusca'
        this.click_buscar = '#btnOK'
        this.click_produto = '.ProductCard__Wrapper-sc-2vuvzo-7:nth-child(1) .ProductCard__Title-sc-2vuvzo-0'
        this.valida_produto = '.styledname__Name-vt5irl-0'
    }

    buscarProduto = () => cy.get(this.buscarproduto).type("iPhone");
    clickBuscar = () => cy.get(this.click_buscar).click();
    clickProduto = () => cy.get(this.click_produto).click();
    valida_produto = () => cy.get(this.valida_produto).invoke('text').should('include', 'iPhone');

}
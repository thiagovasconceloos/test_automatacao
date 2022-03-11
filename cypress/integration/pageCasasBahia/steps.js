import { Home } from '../../support/pages/home'
import { Produto } from '../../support/pages/produto'
import { Carrinho } from '../../support/pages/carrinho'


/* global Given, Then, When */

const home = new Home()
const produto = new Produto()
const carrinho = new Carrinho()




Given(/^que eu acesso o site da Casas Bahia$/, () => {
	home.open();
});

When(/^escrevo Iphone no SeachBar$/, () => {
	produto.buscarProduto();
});

When(/^clico em buscar$/, () => {
	produto.clickBuscar();
});

When(/^escolho um produto no resultado de Busca$/, () => {
    produto.clickProduto();
});

When(/^clico em comprar$/, () => {
    carrinho.clickComprar();
});

When(/^clico em continuar$/, () => {
	carrinho.clickContinuar();
});
Then(/^devo visualizar o nome do produto no carrinho de compras$/, () => {
    produto.valida_produto();
});

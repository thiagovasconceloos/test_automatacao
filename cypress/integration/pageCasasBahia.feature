Feature: pageCasasBahia

    Como usuario, desejo selecionar um Iphone no site da Casas Bahia
    Para validar o nome do Produto no carrinho de compras

Scenario: Validar o nome do Produto no carrinho de compras
    Given que eu acesso o site da Casas Bahia
    And escrevo Iphone no SeachBar
    And clico em buscar
    When escolho um produto no resultado de Busca
    And clico em comprar
    And clico em continuar
    Then devo visualizar o nome do produto no carrinho de compras
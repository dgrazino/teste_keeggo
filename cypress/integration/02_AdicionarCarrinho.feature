Feature: Check out
Scenario: Incluir produto no carrinho
    Given acessar a pagina de detalhe do produto
    When clicar no botao ADD TO CART
    And acessar pagina do carrinho
    And validar itens do carrinho




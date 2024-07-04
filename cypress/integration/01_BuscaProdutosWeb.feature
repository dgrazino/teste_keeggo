Feature: Busca de produtos
Scenario: Buscar um produto especifico
    Given acessar a pagina advantage online shopping
    When clicar no botão Search
    And digitar Tablet na barra de pesquisa e pressionar enter
    Then valida se os resultados contem a palavra tablet



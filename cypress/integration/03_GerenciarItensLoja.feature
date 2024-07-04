Feature: Gerenciamento de produtos
Scenario: Criar um novo produto
    Given estou logado no sistema
    When preencher o formulário com nome do produto, descrição do produto e salvar
    Then validar a criação do produto

Scenario:  Lendo detalhes do produto
    Given estou logado no sistema
    When  eu clico no link Detalhes do Produto A
    Then  eu devo ver os detalhes do Produto A

Scenario: Atualizando um produto existente
    Given eu clico no link Detalhes do Produto A
    When eu atualizo o nome do produto para Produto B e eu clico no botão Salvar
    Then eu devo ver Produto B na lista de produtos

Scenario: Deletando um produto
    Given estou logado no sistema
    When eu clico no botão deletar do produto B
    Then eu não devo ver Produto B na lista de produtos
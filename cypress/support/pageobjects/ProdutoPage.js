/// <reference types="Cypress" />

import ProdutosElements from '../elements/ProdutoElements'
const produtosElements = new ProdutosElements


class BuscarProdutosPage {
    acessarSite() {
        cy.visit('https://advantageonlineshopping.com/#/')
    }
    clicarBotaoSearch(){
        cy.get(produtosElements.botaoSearch()).click()
    }

    inserirTextoSearch(){
        cy.get(produtosElements.imputSearch()).type('Tablet{Enter}')
        cy.get(produtosElements.botaoSearch()).click()
        cy.get(produtosElements.fecharPesquisa()).click()
    }

    validarResultadoPesquisa(){
        cy.get('.cell.categoryRight li .productName').each(($product) => {
            expect($product.text().toLowerCase()).to.include('tablet'.toLowerCase());
    })}
}
export default BuscarProdutosPage;

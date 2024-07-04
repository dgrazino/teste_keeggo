/// <reference types="Cypress" />

import CarrinhoElements from "../elements/CarrinhoElements";
const carrinhoElements = new CarrinhoElements


class CarrinhoPage {
    detalheProduto() {
        cy.get(carrinhoElements.detalheProduto()).click();
    }

    clicarBotaoAddToCart() {
        cy.get(carrinhoElements.botaoAddToCart()).click();
    }

    AcessarPaginaCarrinho() {
        cy.visit('https://advantageonlineshopping.com/#/shoppingCart')
    }

    validarItensDoCarrinho() {
        cy.get(carrinhoElements.itensNoCarrinho()).each(($row) => {
            cy.wrap($row).find('td:nth-child(2)').then(($productCell) => {
                expect($productCell.text().toLowerCase()).to.include('tablet'.toLowerCase());
            })
        }
        )
    }
}
export default CarrinhoPage;

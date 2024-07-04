/* global Given, Then, When */
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

import BuscaProdutoPage from '../pageobjects/ProdutoPage'
const buscaProdutoPage = new BuscaProdutoPage

import CarrinhoPage from '../pageobjects/CarrinhoPage'
const carrinhoPage = new CarrinhoPage


Given("acessar a pagina de detalhe do produto", () => {
    buscaProdutoPage.acessarSite();
    buscaProdutoPage.clicarBotaoSearch();
    buscaProdutoPage.inserirTextoSearch();
    carrinhoPage.detalheProduto();
})


Given("clicar no botao ADD TO CART", () => {
    carrinhoPage.clicarBotaoAddToCart();
})

Given("acessar pagina do carrinho", () => {
    carrinhoPage.AcessarPaginaCarrinho();
})

Given("validar itens do carrinho", () => {
    carrinhoPage.validarItensDoCarrinho();
})




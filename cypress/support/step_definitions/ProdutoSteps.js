/* global Given, Then, When */
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

import BuscaProdutoPage from '../pageobjects/ProdutoPage'
const buscaProdutoPage = new BuscaProdutoPage


Given("acessar a pagina advantage online shopping", () => {
    buscaProdutoPage.acessarSite();
})

Given("clicar no botão Search", () => {
    buscaProdutoPage.clicarBotaoSearch();
})

Given("digitar Tablet na barra de pesquisa e pressionar enter", () => {
    buscaProdutoPage.inserirTextoSearch();
})

Given("valida se os resultados contem a palavra tablet", () => {
    buscaProdutoPage.validarResultadoPesquisa();
})




import{Given, When, Then} from "@badeball/cypress-cucumber-preprocessor"
const { faker, Faker } = require('@faker-js/faker');
let access_token;
let refresh_token;
let productName = faker.commerce.productName();
let numPrice = faker.commerce.price();
let txtDescription = faker.commerce.productDescription();
let idCreated;
let newProductName = faker.commerce.productName();
//

Given("estou logado no sistema", () => {
  const email = 'john@mail.com'
  const password = 'changeme';
    cy.request({
      method: 'POST',
      url: 'https://api.escuelajs.co/api/v1/auth/login',
      headers: {
        'Content-Type': 'application/json'
      },
      body: {
        email: email,
        password: password,
      },

    }).then((response) => {
      expect(response.status).to.equal(201);
      access_token = response.body.access_token;
      refresh_token = response.body.refresh_token
      const objetoComoString = JSON.stringify(response.body, null, 2);
      cy.log(objetoComoString)
    });
});

When("preencher o formulário com nome do produto, descrição do produto e salvar", () => {
  const productData = {
    title: productName,
    price: numPrice,
    description: txtDescription,
    categoryId: 2,
    images: ["https://placeimg.com/640/480/any"],
  };
     cy.request({
        method: 'POST',
        url: 'https://api.escuelajs.co/api/v1/products/',
        headers: {
          'Accept-Language': 'pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7,fr;q=0.6',
          'Content-Type': 'application/json',
          'accept': 'application/json',
          'Authorization': 'Bearer ${accessToken}'
        },
        body: productData,
        //failOnStatusCode: false,
      }).then((response) => {
        expect(response.status).to.eq(201);
        const objetoComoString = JSON.stringify(response.body, null, 2);
        cy.log(objetoComoString)
        idCreated = response.body.id;
        cy.log('IdItem criado:', idCreated);
      });
});

Then("validar a criação do produto", () => {
  cy.request({
    method: 'GET',
    url: 'https://api.escuelajs.co/api/v1/products',
    headers: {
      'Content-Type': 'application/json'
    },
  }).then((response) => {
    expect(response.status).to.equal(200);
    const itens = response.body;
    const ItemNaLista = itens.find(itens => itens.id === idCreated);
    expect(ItemNaLista).to.not.be.undefined
  });
});



Then("eu clico no link Detalhes do Produto A", () => {
  cy.request({
    method: 'GET',
    url: 'https://api.escuelajs.co/api/v1/products/' + idCreated,
    headers: {
      'Content-Type': 'application/json'
    },
  }).then((response) => {
    expect(response.status).to.equal(200);
    const objetoComoString = JSON.stringify(response.body, null, 2);
    cy.log(objetoComoString)
  });
});

Then("eu devo ver os detalhes do Produto A", () => {
  cy.request({
    method: 'GET',
    url: 'https://api.escuelajs.co/api/v1/products/' + idCreated,
    headers: {
      'Content-Type': 'application/json'
    },
  }).then((response) => {
    expect(response.status).to.equal(200);
    const productDetails = response.body;
    expect(productDetails.description).to.equal(txtDescription);
  });
});

Then("eu atualizo o nome do produto para Produto B e eu clico no botão Salvar", () => {
  const updatedProductData = {
    title: newProductName
  };
  cy.request({
    method: 'PUT',
    url: 'https://api.escuelajs.co/api/v1/products/' + idCreated,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ${accessToken}'
    },
    body: updatedProductData
  }).then((response) => {
    expect(response.status).to.equal(200);
  });
});


Then("eu devo ver Produto B na lista de produtos", () => {
  cy.request({
    method: 'GET',
    url: 'https://api.escuelajs.co/api/v1/products/' + idCreated,
    headers: {
      'Content-Type': 'application/json'
    },
  }).then((response) => {
    expect(response.status).to.equal(200);
    const productDetails = response.body;
    expect(productDetails.title).to.equal(newProductName);
  });
});


When("eu clico no botão deletar do produto B", () => {
  cy.request({
    method: 'DELETE',
    url: 'https://api.escuelajs.co/api/v1/products/' + idCreated,
    headers: {
      'Content-Type': 'application/json'
    },
  }).then((response) => {
    expect(response.status).to.equal(200);
  });
});

Then("eu não devo ver Produto B na lista de produtos", () => {
  cy.request({
    method: 'GET',
    url: 'https://api.escuelajs.co/api/v1/products',
    headers: {
      'Content-Type': 'application/json'
    },
  }).then((response) => {
    expect(response.status).to.equal(200);
    const itens = response.body;
    const ItemNaLista = itens.find(itens => itens.id === idCreated);
    expect(ItemNaLista).to.be.undefined
  });
});
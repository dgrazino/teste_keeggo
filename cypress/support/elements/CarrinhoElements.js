class CarrinhoElements {
    detalheProduto = () => {return '.cell.categoryRight li .productName:first'}    

    botaoAddToCart = () => {return 'button[name="save_to_cart"]'}   

    itensNoCarrinho = () => {return 'table.fixedTableEdgeCompatibility tbody tr'}
}

export default CarrinhoElements;


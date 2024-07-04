class BuscarProdutosElements {
    //botaoLogin = () => { return 'nav > .mat-focus-indicator' }
    botaoLogin = () => { return 'a[href$="/login"] > .mat-button-wrapper' }
    botaoSearch = () => {return '#menuSearch'}
    imputSearch = () => {return '#autoComplete'}
    fecharPesquisa = () => {return 'div[data-ng-click="closeSearchForce()"]'}
}

export default BuscarProdutosElements;
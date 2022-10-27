const CarrinhoDeCompras = (itens) => ({
    itens,
    getItens: () => (itens),
    getPrecoTotal() {
        var preco = 0
        this.itens.forEach(item => {
            preco += item.preco;
        });
        return preco;
    },
});


var item1 = {
    nome: "item 1",
    preco: 40
};
var item2 = {
    nome: "item 2",
    preco: 90
};
const carrinho = CarrinhoDeCompras([item1, item2]);

console.log("************* Carrinho de compras ************************");
console.log(carrinho.getItens());
console.log("Preço total: " + carrinho.getPrecoTotal());
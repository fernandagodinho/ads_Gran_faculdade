function adicionarAoCarrinho(produto) {
    const carrinho = document.getElementById('itens-carrinho');
    const item = document.createElement('li');
    item.textContent = produto;
    carrinho.appendChild(item);
}

function adicionarProduto(nome, preco) {
    const lista = document.getElementById('lista-produtos');
    const novoItem = document.createElement('li');
    const precoFormatado = Number(preco).toFixed(2).replace('.', ',');
    novoItem.textContent = `${nome} - R$ ${precoFormatado}`;
    lista.appendChild(novoItem);
}


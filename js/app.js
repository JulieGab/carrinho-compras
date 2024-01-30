function adicionar (){
    // recuperar valores do nome do produto e quantidade
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario =  produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;
    // calcular o preço, nosso subtotal
    let preco = quantidade * valorUnitario;
    // adicionar no carrinho
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$1400</span>
  </section>`
    // atualizar o valor total da compra

    }

function limpar() {

}
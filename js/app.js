function adicionar (){
    // recuperar valores do nome do produto e quantidade
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario =  produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade')
    alert(nomeProduto);
    alert(produto);
    alert(quantidade.value);
    let preco = quantidade.value * valorUnitario;
    alert(preco);
    // calcular o preço, o subtotal
    // adicionar no carrinho
    // atualizar o valor total da compra

    }

function limpar() {

}
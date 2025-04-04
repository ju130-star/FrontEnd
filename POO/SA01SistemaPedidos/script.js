// criar classes

class Cliente{
    constructor(id, nome){
        this.id = id;
        this.nome =nome;
    }
}
class Produto{
    constructor(id, nome, preco){
        this.id = id;
        this.nome = nome; 
        this.preco = preco;
    }
}

class Pedido{
    constructor(id, clientes, itens, desconto){
        this.id = id;
        this.cliente = cliente;
        this.itens = itens;
        this.desconto = desconto;
        this.total = this.calcularTotal();
    }

calculartotal(){
    let total = this.itens.reduce((acc,item)=>
    acc+(item.produto.preco * item.quantidade), 0);
    return total -(total*(this.desconto/100));
}
}

class SistemaPedidos{
    constructor(){
        this.clientes =[];
        this.produtos =[];
        this.pedidos =[];
    }

    cadastarCliente(){
        const nome = document.getElementById("clienteNome").ariaValueMax;
        if(!nome) return alert ("Digite um nome para o cliente. ");
        const cliente = new Cliente(this.clientes.length+1,nome)
        this.clientes.push(cliente);
    }

    cadastrarProduto(){
        const nome = document.getElementById("produtoNome").value;
        const preco = parseFloat(document.getElementById("produtoNome").value);
        if(!nome || !preco) return alert("Prencha Todos os Campos Do Produto");
        const produto = new Produto(this.produtos.length+1,nome,preco);
        this.produtos.push(produto);
    }
    atualizarClientes(){
        const lista = document.getElementById("listaClientes");
        lista.innerHTML = "";

        const selectCliente = document.getElementById("selectCliente");
        selectCliente.innerHTML = '<option value = "">Selecionar um cliente</option>';
        this.clientes.forEach(cliente =>{
            const li = document.createElement("li");
            li.innerHTML - cliente.nome;
        })
    }}
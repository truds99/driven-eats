let pratoSelecionado, bebidaSelecionada, sobreSelecionada;
const msg = document.querySelector("button").innerHTML; // para voltar o texto inicial ao desmarcar uma opção
const botao = document.querySelector("button"); // para alterar o background do botão

document.querySelector("button").disabled = true;

function converterNumero (precoString) {
    let preco = precoString.replace("R$ ","");
    preco = preco.replace(",",".");
    preco = Number(preco);
    return preco;
}

function selecaoPrato(elemento) {
    pratoSelecionado = document.querySelector(".prato.selecionado");
    if (pratoSelecionado === elemento){}
    else{
        if (pratoSelecionado !== null) {
            pratoSelecionado.classList.remove("selecionado");
        }
    }    
    elemento.classList.toggle("selecionado");
    pratoSelecionado = document.querySelector(".prato.selecionado");
    pedido();
}

function selecaoBebida(elemento) {
    bebidaSelecionada = document.querySelector(".bebida.selecionado");
    if (bebidaSelecionada === elemento){}
    else{
        if (bebidaSelecionada !== null) {
            bebidaSelecionada.classList.remove("selecionado");
        }
    }  
    elemento.classList.toggle("selecionado");
    bebidaSelecionada = document.querySelector(".bebida.selecionado");
    pedido();
}   

function selecaoSobre(elemento) {
    sobreSelecionada = document.querySelector(".sobremesa.selecionado");
    if (sobreSelecionada === elemento){}
    else{
        if (sobreSelecionada !== null) {
            sobreSelecionada.classList.remove("selecionado");
        }
    }  
    elemento.classList.toggle("selecionado");
    sobreSelecionada = document.querySelector(".sobremesa.selecionado");
    pedido();
}

function pedido() {
    if (pratoSelecionado && bebidaSelecionada && sobreSelecionada){
        document.querySelector("button").innerHTML = "Fechar pedido";
        botao.classList.add("bgbotao");
        document.querySelector("button").disabled = false;
    }
    else {
        document.querySelector("button").innerHTML =  msg;
        botao.classList.remove("bgbotao");
        document.querySelector("button").disabled = true;
    }
}   

function whatsapp(){
    let nome = prompt("Qual o seu nome?");
    let endereco = prompt("Qual o seu endereço?");  
    let prato = pratoSelecionado.querySelector("h4").innerHTML;
    let bebida = bebidaSelecionada.querySelector("h4").innerHTML;
    let sobremesa = sobreSelecionada.querySelector("h4").innerHTML;
    let precoTotal = converterNumero(pratoSelecionado.querySelector("h6").innerHTML) + converterNumero(bebidaSelecionada.querySelector("h6").innerHTML) + converterNumero(sobreSelecionada.querySelector("h6").innerHTML);
    let msg = `Olá, gostaria de fazer o pedido: 
    - Prato: ${prato}
    - Bebida: ${bebida}
    - Sobremesa: ${sobremesa}
    Total: R$ ${precoTotal.toFixed(2)}
    
    Nome: ${nome}
    Endereço: ${endereco}`;
    msg = encodeURIComponent(msg);
    const url = `https://wa.me/?text=${msg}`;
    window.open(url);
}

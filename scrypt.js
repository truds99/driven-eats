let pratoSelecionado, bebidaSelecionada, sobreSelecionada;
const msg = document.querySelector("button").innerHTML;
const botao = document.querySelector("button");
const confirmacao = document.querySelector(".escondido");
const pratoJanela = document.querySelector(".valor-Prato");
const bebidaJanela = document.querySelector(".valor-Bebida");
const sobreJanela = document.querySelector(".valor-Sobremesa");
document.querySelector("button").disabled = true;

function converterNumero (precoString) {
    let preco = precoString.replace("R$ ","");
    preco = preco.replace(",",".");
    preco = Number(preco);
    return preco;
}

function selecaoPrato(elemento) {
    pratoSelecionado = document.querySelector(".prato.selecionado");
    if (!(pratoSelecionado === elemento) && (pratoSelecionado !== null)) {
        pratoSelecionado.classList.remove("selecionado");
    }    
    elemento.classList.toggle("selecionado");
    pratoSelecionado = document.querySelector(".prato.selecionado");
    pedido();
}

function selecaoBebida(elemento) {
    bebidaSelecionada = document.querySelector(".bebida.selecionado");
    if (!(bebidaSelecionada === elemento) && bebidaSelecionada !== null) {
        bebidaSelecionada.classList.remove("selecionado");
    }  
    elemento.classList.toggle("selecionado");
    bebidaSelecionada = document.querySelector(".bebida.selecionado");
    pedido();
}   

function selecaoSobre(elemento) {
    sobreSelecionada = document.querySelector(".sobremesa.selecionado");
    if (!(sobreSelecionada === elemento) && sobreSelecionada !== null) {
        sobreSelecionada.classList.remove("selecionado");
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

function confirmarPedido(){
    let prato = pratoSelecionado.querySelector("h4").innerHTML;
    let bebida = bebidaSelecionada.querySelector("h4").innerHTML;
    let sobremesa = sobreSelecionada.querySelector("h4").innerHTML;
    let precoPrato = pratoSelecionado.querySelector("h6").innerHTML;
    let precoBebida = bebidaSelecionada.querySelector("h6").innerHTML;
    let precoSobremesa = sobreSelecionada.querySelector("h6").innerHTML;
    let precoTotal =
        converterNumero(precoPrato) +
        converterNumero(precoBebida) +
        converterNumero(precoSobremesa)
    ;
    pratoJanela.querySelector(".item").innerHTML = prato;
    pratoJanela.querySelector(".preco").innerHTML = precoPrato;
    bebidaJanela.querySelector(".item").innerHTML = bebida;
    bebidaJanela.querySelector(".preco").innerHTML = precoBebida;
    sobreJanela.querySelector(".item").innerHTML = sobremesa;
    sobreJanela.querySelector(".preco").innerHTML = precoSobremesa;
    confirmacao.querySelector(".valor-Total").lastElementChild.innerHTML = precoTotal.toFixed(2).replace('.', ',');
    confirmacao.classList.add("confirmacao");
    confirmacao.classList.remove("escondido");
}

function whatsapp(){
    let prato = pratoSelecionado.querySelector("h4").innerHTML;
    let bebida = bebidaSelecionada.querySelector("h4").innerHTML;
    let sobremesa = sobreSelecionada.querySelector("h4").innerHTML;
    let precoPrato = pratoSelecionado.querySelector("h6").innerHTML;
    let precoBebida = bebidaSelecionada.querySelector("h6").innerHTML;
    let precoSobremesa = sobreSelecionada.querySelector("h6").innerHTML;

    let precoTotal =
        converterNumero(precoPrato) +
        converterNumero(precoBebida) +
        converterNumero(precoSobremesa);

    let msg = 
        `Olá, gostaria de fazer o pedido: 
        - Prato: ${prato}
        - Bebida: ${bebida}
        - Sobremesa: ${sobremesa}
        Total: R$ ${precoTotal.toFixed(2).replace(".", ",")}`
    ;

    msg = encodeURIComponent(msg);
    const url = `https://wa.me//5532984967075?text=${msg}`;
    window.open(url);
}

function fecharJanela() {
    confirmacao.classList.add("escondido");
    confirmacao.classList.remove("confirmacao");
}

let pratoSelecionado;
let bebidaSelecionada;
let sobreSelecionada;
const msg = document.querySelector("button").innerHTML; // para voltar o texto inicial ao desmarcar uma opção
const botao = document.querySelector("button"); // para alterar o background do botão

document.querySelector("button").disabled = true;

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
    let prato = pratoSelecionado.querySelector("h4").innerHTML;
    let bebida = bebidaSelecionada.querySelector("h4").innerHTML;
    let sobremesa = sobreSelecionada.querySelector("h4").innerHTML;
    let preco = Number(pratoSelecionado.querySelector("span").innerHTML) + Number(bebidaSelecionada.querySelector("span").innerHTML) + Number(sobreSelecionada.querySelector("span").innerHTML);
    const url = "https://wa.me/?text=" + encodeURIComponent("Olá, gostaria de fazer o pedido:\n- Prato: ") + prato + encodeURIComponent("\n- Bebida: ") + bebida + encodeURIComponent("\n- Sobremesa: ") + sobremesa + encodeURIComponent("\nTotal: R$ ") + preco.toFixed(2);
    window.open(url, '_blank');
}

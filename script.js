// Adiciona números ou operadores ao visor
function adicionar(valor) {
    const visor = document.getElementById('visor');
    visor.value += valor;
}

// Limpa o visor
function limparVisor() {
    const visor = document.getElementById('visor');
    visor.value = "";
}

// Realiza o cálculo
function calcular() {
    const visor = document.getElementById('visor');
    try {
        visor.value = eval(visor.value);
    } catch (error) {
        visor.value = "Erro";
    }
}
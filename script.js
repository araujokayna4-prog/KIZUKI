
// KIZUKI - SISTEMA PRINCIPAL

function mostrarMensagem(texto) {
    const mensagem = document.getElementById("mensagem");

    if (mensagem) {
        mensagem.innerHTML = `
            <h3> KIZUKI </h3>
            <p>${texto}</p>
        `;
    }
}

function abrirConfiguracoes() {
    mostrarMensagem("CONFIGURAÇÕES");
}

function abrirSobre() {
    mostrarMensagem("KIZUKI - Versão 1.0");
}

function voltarPainel() {
    mostrarMensagem("Bem-vindo ao KIZUKI!");
}

function ativarRecurso(nome) {
    mostrarMensagem(nome + " ativado!");
}

function desativarRecurso(nome) {
    mostrarMensagem(nome + " desativado!");
}

function testarPainel() {
    console.log("KIZUKI funcionando perfeitamente!");
}

console.log("KIZUKI carregado!");

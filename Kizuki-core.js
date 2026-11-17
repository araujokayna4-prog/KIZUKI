
/* =================================
   KIZUKI CORE V1.0
   Núcleo de comunicação do sistema
================================= */

const KIZUKI = {
  nome: "KIZUKI",
  versao: "1.0",

  modulos: {},

  eventos: {},

  registrarModulo(nome, modulo) {
    this.modulos[nome] = {
      ...modulo,
      ativo: false
    };

    console.log("Módulo registrado:", nome);
  },

  ativarModulo(nome) {
    if (!this.modulos[nome]) {
      return false;
    }

    this.modulos[nome].ativo = true;
    this.emitir("moduloAtivado", nome);

    return true;
  },

  desativarModulo(nome) {
    if (!this.modulos[nome]) {
      return false;
    }

    this.modulos[nome].ativo = false;
    this.emitir("moduloDesativado", nome);

    return true;
  },

  ouvir(evento, callback) {
    if (!this.eventos[evento]) {
      this.eventos[evento] = [];
    }

    this.eventos[evento].push(callback);
  },

  emitir(evento, dados) {
    (this.eventos[evento] || []).forEach(callback => {
      callback(dados);
    });
  },

  listarModulos() {
    return Object.keys(this.modulos);
  }
};

window.KIZUKI = KIZUKI;

console.log("KIZUKI CORE iniciado!");

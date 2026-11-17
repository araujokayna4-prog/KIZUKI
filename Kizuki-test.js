
/* =================================
   KIZUKI SYSTEM TEST V1.0
================================= */

window.addEventListener("load", function () {

  console.log("KIZUKI: iniciando testes...");

  if (!window.KIZUKI) {
    console.error("KIZUKI CORE não encontrado!");
    return;
  }

  if (!window.KIZUKI_MODULES) {
    console.error("MODULE MANAGER não encontrado!");
    return;
  }

  KIZUKI_MODULES.listar().forEach(modulo => {
    KIZUKI.registrarModulo(modulo.nome, {
      tipo: modulo.tipo
    });
  });

  KIZUKI.ouvir("moduloAtivado", nome => {
    console.log("Módulo ativado:", nome);
  });

  KIZUKI.ouvir("moduloDesativado", nome => {
    console.log("Módulo desativado:", nome);
  });

  console.log("Módulos carregados:");
  console.table(KIZUKI_MODULES.listar());

  console.log("KIZUKI pronto para testes!");

});

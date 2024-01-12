const btnGeneratePassword = document.querySelector(".btn-generate-password");
const input = document.querySelector("#input-password");

btnGeneratePassword.addEventListener("click", () => {
  input.value = generatePassword();
  console.log("oi");
});

/**
 * 
 */
input.addEventListener("click", () => {
  copiarParaAreaDeTransferencia(input);
});

function generatePassword(comprimento = 20) {
  const caracteres =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+";
  let senha = "";

  for (let i = 0; i < comprimento; i++) {
    const randomIndex = Math.floor(Math.random() * caracteres.length);
    senha += caracteres[randomIndex];
  }

  return senha;
}

function copiarParaAreaDeTransferencia(input) {
  if (input.value === "") return;

  // Seleciona o conteúdo do input
  input.select();

  // Copia o conteúdo para a área de transferência
  document.execCommand("copy");

  // Deseleciona o input (opcional)
  input.setSelectionRange(0, 0);

  // Exibe uma mensagem ou realiza outras ações após a cópia (opcional)
  alert("Texto copiado para a área de transferência!");
}

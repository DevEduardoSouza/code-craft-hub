function gerarSenha(comprimento) {
  const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+';
  let senha = 'EB-';
  
  for (let i = 0; i < comprimento; i++) {
    const randomIndex = Math.floor(Math.random() * caracteres.length);
    senha += caracteres[randomIndex];
  }
  
  return senha;
}

// Exemplo de uso para gerar uma senha de comprimento 12
const senhaSegura = gerarSenha(12);
console.log(senhaSegura);

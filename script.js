function armazenarValor(){
//armazena o valor que o usuário digitou
  var userImput = document.getElementById("userImput").value;
// exibe o valor armazenado
  console.log ("O valor da variavel é: " + userImput);
//atualiza o conteúdo
  document.getElementById("valorInserido").innerText = "O valor inserido é: "+ userImput;
}
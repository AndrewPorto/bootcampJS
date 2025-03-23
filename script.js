const nome = document.getElementById("nome");
const peso = document.getElementById("peso");
const altura = document.getElementById("altura");
const resultado = document.getElementById("resultado");
const loadbtn = document.getElementById("btn");

loadbtn.addEventListener("click", () => {
  loadbtn.classList.toggle("loading");
});

function calcularImc() {
  var nomeValor = nome.value;
  var pesoValor = parseFloat(peso.value);
  var alturaValor = parseFloat(altura.value);

  var imc = (pesoValor / (alturaValor * alturaValor)).toFixed(2);

  let faixaImc = "";

  if (imc < 16) {
    faixaImc = "Abaixo do peso muito grave";
  } else if (imc >= 16 && imc <= 16.99) {
    faixaImc = "Abaixo do peso grave";
  } else if (imc >= 17 && imc <= 18.49) {
    faixaImc = "Baixo peso";
  } else if (imc >= 18.5 && imc <= 24.99) {
    faixaImc = "Peso normal";
  } else if (imc >= 25 && imc <= 29.99) {
    faixaImc = "Sobrepeso";
  } else if (imc >= 30 && imc <= 34.99) {
    faixaImc = "Obesidade grau I";
  } else if (imc >= 35 && imc <= 39.99) {
    faixaImc = "Obesidade grau II";
  } else if (imc >= 40) {
    faixaImc = "Obesidade grau III";
  }

  setTimeout(() => {
    resultado.innerHTML = `Olá ${nomeValor}, seu IMC é ${imc}: ${faixaImc}`;
    console.log(imc);

    loadbtn.classList.remove("loading");
  }, 1500);
}

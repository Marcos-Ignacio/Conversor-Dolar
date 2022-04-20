function Converter() {
  var valorElemento = document.getElementById("valorDolar");
  var valor = valorElemento.value;
  var valorDolar = parseFloat(valor);

  var valorReal = valorDolar * 4.67;
  console.log(valorReal);

  var resultado = document.getElementById("valorConvertidoDolar");
  var valorConvertido = "O valor em Real é R$ " + valorReal;
  resultado.innerHTML = valorConvertido;
}


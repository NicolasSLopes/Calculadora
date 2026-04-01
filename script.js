document getElementById("multiplicacao").addEventListener("click", () => {
    if(!validar()) return;
    const a = parseFloat(num1.value);
    const b = parseFloat(num2.value);
    resultado.innerText = "Resultado" + multiplicar(a, b);
});

document getElementById("divisao").addEventListener("click", () => {
    if(!validar()) return;
    const a = parseFloat(num1.value);
    const b = parseFloat(num2.value);
    resultado.innerText = "Resultado" + dividir(a, b);
});

//Limpando
document getElementById("limpar").addEventListener("click", () => {
    num1.value = "";
    num2.value = "";
    resultado.innerText = "Resultado";
});
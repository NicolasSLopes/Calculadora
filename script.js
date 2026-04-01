const num1 = document.getElementByld("num1");
const num2 = document.getElementByld("num2");
const resultado = document.getElementByld("resultado");

//Função de validação
function validar(){
    if (num1value === ""|| num2.value===""){
        resultado.innerText = "Erro: Preencha todos os campos!";
        return false;
    }
}
if (isNaN(num1.value)||isNaN(num2.value)){
    resultado.innerText = "Erro: digite apenas numeros!";
    return false;
}
//Funções matemáticas
function somar(a,b){
    return a+b;
}

function subtrair (a,b){
    return a-b;
}
function muliplicar(a,b){
    return a*b;
}

function dividir(a,b){
    if (b===0){
        return "Erro: Não é possivel dividir por 0!";
    }
    return a/b;
}




/* Caique M Dziuba */ 
// Maio de 2021

function clicou() {
    document.getElementById("agradecimento").innerHTML = "<b>Linkedin</b>"; //injetando um texto negrito como HTML ao clicar no botão
    
    //alert("Obrigado por clicar");
}

function redirecionar(){
    window.open("https://www.linkedin.com/in/caiquedziuba/"); //redireciona para uma nova janela
    //window.location.href = "https://www.linkedin.com/in/caiquedziuba/"; //redireciona na mesma janela
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado";
    //alert ("trocar texto");
    elemento.innerHTML = "Obrigado"
}

function voltar (elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o Mouse aqui";
    elemento.innerHTML = "Passe o Mouse aqui"
}

function load(){
    alert("Pagina Carregada");
}

function funcaoChange(elemento) {
    console.log(elemento.value);
}

/*
function soma(n1, n2) {
    return n1 + n2;
}


function setReplace(frase, nome, novo_nome) {
    return frase.replace(nome, novo_nome);
}

var validar = 0; //variavel global, que é utilizada na função validaIdade
function validaIdade (idade) {
    if (idade >= 18) {
        validar = true;
    }
    else {
        validar = false;
    }
    return validar;
}

var idade = prompt("Qual sua idade?");
console.log(validaIdade(idade));

alert(soma(5, 10));
alert(setReplace("Vai Japão", "Japão", "Brasil"));
*/

/*
var dat = new Date(); //inicializando uma variavel data
alert(dat); //data atual
alert(dat.getMonth()+1); //mês atual
alert(dat.getHours()); //obtem hora atual
*/

/*
var countt;
for (countt=0; countt <= 5; countt++) { //estrutura de repetição for
    alert(countt);
};
*/

/*
var count = 0;
while (count <= 5) { //usando while para adicionar 5 idades e conferir maioridade
    var idade = prompt("Qual a sua idade?");
    //var idade = 18;
    if (idade >= 18) { // condicional
        alert("maior de idade");
    }
    else {
        alert("menor de idade");
    };
    console.log(count);
    count++;
};
*/

/*
var frutas = [{nome: "maça", cor: "vermelha"}, {nome:"uva", cor: "roxa"}] //lista de dicionario
console.log(frutas);
alert(frutas[1].nome);


var fruta = {nome: "maça", cor: "vermelha"} //dicionario
console.log(fruta.nome);
alert(fruta.cor);
*/

/*
var lista = ["maça", "pêra", "laranja"]; //lista
lista.push("uva"); //incluir elemento na lista
lista.pop(); //remove ultimo elemento da lista
console.log(lista[1]); //exibir item de posição 1 na lista
console.log(lista); //exibe lista completa
console.log(lista.length); //exibe tamanho da lista
console.log(lista.reverse()); //metodo que reverte lista
console.log(lista.toString()); //transforma o array em string
console.log(lista.toString()[0]); //exibe apenas primeiro elemnto DA STRING
console.log(lista.join(" - ")); //substitui a virgula por outro elemento para separar as strings
*/

/*
var nome = "Caique Dziuba";
var idade = 28;
var idade2 = 10;
var frase = "Japão é o melhor time do mundo.";
alert(nome + " tem " + idade + " anos");


console.log(nome);
console.log(idade+idade2);
console.log(frase.replace("Japão", "Brasil")); //substitui uma palavra da string por outra
alert(frase.replace("Japão", "Brasil")); //substitui uma palavra da string por outra
console.log(frase.toUpperCase()); //Deixa a frase toda maiuscula
console.log(frase.toLowerCase()); //Deixa a frase toda minuscula
*/
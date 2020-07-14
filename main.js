/*
var nome = 'Silmar Silva';
var idade = 32;
var frase = 'JavaScript se pare com Python'
alert(frase.replace('Python', 'Java'))
alert('Seu nome é ' + nome + ' e sua idade é ' + idade);
console.log(nome);
console.log(idade);
- lista
var lista = ['maçã', 'pẽra', 'uva']
//lista.push('laranja');
lista.pop();
console.log(lista)

 - dicionários
var frutas = [{nome: 'maça', cor: 'vermelha'}, {nome: 'uva', cor: 'verde'}]
console.log(frutas);
alert(frutas[1].nome);

- condicionais
var idade = prompt('Informe sua idade: ');
if (idade >= 18){
    alert('Você é maior de idade, já pode trabalhar.');
}else{
    alert('Você é menor de idade, pode apenas ser menor aprendiz.');
};
- lacos de repetição WHILE
var count = 0;
while (count <= 5){
    console.log(count);
    alert(count);
    count ++;    
}
laço FOR
var count;
for(count = 0; count <= 5; count ++){
    alert(count);
};
- Manipulando datas

var data = new Date();
alert(data.getDate());
alert(data.getMonth()+1); //para mês add +1 para informar corretamente, pois a contagem inicia do 0
alert(data.getFullYear());

- funções
function soma(n1, n2){
    return n1 + n2;
}
function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}
alert(soma(5, 10));
alert(setReplace('Eu sou biólogo', 'biólogo', 'Programador'));

- Variáveis globais vs locais
//var validar
function validarIdade(idade) {
    var validar
    if (idade >= 18) {
        validar = true
    } else {
        validar = false
    }
    return validar;
}
var idade = prompt('Informe sua idade: ')
validarIdade(idade)
console.log(validar);
*/
function clicou(){
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar";
    //alert('Obrigado por clicar');
}
function redirecionar(){
    window.open('https://github.com/SilmarSilva');
}

function trocar(elemento){
   // document.getElementById('mousemove').innerHTML = 'Obrigado por passar o mouse aqui!';
    elemento.innerHTML = "Obrigado por passar o mouse";
}

function voltar(elemento){
    //document.getElementById('mousemove').innerHTML = 'Passe o mouse aqui!';
    elemento.innerHTML = "Passe o mouse aqui";
}
function load(){
    alert('Página carregada com sucesso!')
}

function funcaoChange(elemento){
    console.log(elemento.value)
}
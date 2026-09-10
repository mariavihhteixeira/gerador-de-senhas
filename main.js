const numeroSenha= document.querySelector('.parametro-senha__texto');
let tamanhoSenha = 12;
numeroSenha.textContent= tamanhoSenha;

const letrasMaiusculas= 'ABCDEFGHIJKLMNOPQQRSTUVWXYZ';
const letrasMinusculas = 'abcdefghijklmnopqrstuvwxyz';
const numeros= '123456789';
const simbolos= '!?*@%';
const botoes = document.querySelectorAll('.parametro-senha__botao');
const campoSenha= document.querySelector('#campo-senha');
const checkbox= document.querySelectorAll('.checkbox');
const forcaSenha= document.querySelector('.forca');

botoes[0].onclick = diminuiTamanho;
botoes[1].onclick =  aumentaTamanho;

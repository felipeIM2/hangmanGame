import list from './components/list.js'

//-- Gera uma nova palavra para jogar
const newGenerate = document.getElementById("newGenerate");

//-- Carrega a função que grava valores dos inputs no localStorage
setTimeout(() => {
  setData();
}, "100");

//-- Recarregar palavra e dica
newGenerate.addEventListener("click", () => {
  location.reload();
});

//-- Gera elementos de palavra e dicas para o jogo
const randomElement = list[Math.floor(Math.random() * list.length)];

//-- Inclui os elementos em seus respectivos inputs na homepage
  function elements(){
   document.getElementById("word").value = randomElement.palavra;
   document.getElementById("tip").value = randomElement.dica;
  } 
 elements();

//-- Iniciar o jogo com as palavras 
 let initGame = document.getElementById("initGame");

//-- Capturando as palavras dos inputs
 let wr = document.getElementById("word").value; 
 let tp = document.getElementById("tip").value;

//-- Função que grava as palavras no localStorage
 function setData() {
  localStorage.setItem("word", wr);
  localStorage.setItem("tip", tp);
}
 
//-- Chamando a rota do jogo
 initGame.addEventListener("click", () => {
    location = "/html/home.html"
});

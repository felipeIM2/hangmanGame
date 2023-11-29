import list from './components/list.js'
let listagem = list

setTimeout(() => {
  window.reload();
}, "1000");

const randomElement = listagem[Math.floor(Math.random() * listagem.length)];
 
   function dicas(){
    document.getElementById("word").value = randomElement.palavra;
    document.getElementById("tip").value = randomElement.dica;
  } 
dicas()

import list from './components/list.js'
let listagem = list

// setTimeout(() => {
//   location.reload();
// }, "1000");

const randomElement = listagem[Math.floor(Math.random() * listagem.length)];

   function dicas(){
      document.getElementById("word").value = randomElement.palavra;
      document.getElementById("tip").value = randomElement.dica;
  } 
dicas()



const newGenerate = document.getElementById("newGenerate");
newGenerate.addEventListener("click", () => location.reload());
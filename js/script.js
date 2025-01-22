import list from './components/list.js'


const newGenerate = document.getElementById("newGenerate");

// setTimeout(() => {
//   setData();
// }, "100");

// newGenerate.addEventListener("click", () => {
//   location.reload();
// });


const randomElement1 = list.palavrasF[Math.floor(Math.random() * list.palavrasF.length)];
const randomElement2 = list.palavrasM[Math.floor(Math.random() * list.palavrasM.length)];
const randomElement3 = list.palavrasD[Math.floor(Math.random() * list.palavrasD.length)];
    
  function elementsF(){
   document.getElementById("word").value = randomElement1.palavra;
   document.getElementById("tip").value = randomElement1.dica;
  } 

  function elementsM(){
    document.getElementById("word").value = randomElement2.palavra;
    document.getElementById("tip").value = randomElement2.dica;
   }   
   
   function elementsD(){
    document.getElementById("word").value = randomElement3.palavra;
    document.getElementById("tip").value = randomElement3.dica;
   } 


 let initGame = document.getElementById("initGame");


function loadNull(){
  let wr = document.getElementById("word").value; 
  let tp = document.getElementById("tip").value; 
  if(wr === "" && tp === ""){
    document.getElementById("word").value = "********" 
    document.getElementById("tip").value = "********" 
  }
}
loadNull() 

 function setData() { 
  let wr = document.getElementById("word").value; 
  let tp = document.getElementById("tip").value; 
    console.log(wr, tp)
  localStorage.setItem("word", wr);
  localStorage.setItem("tip", tp);
}
 
 initGame.addEventListener("click", () => {
    let wr = document.getElementById("word").value; 
    let tp = document.getElementById("tip").value;
    if(wr === "********" && tp === "********"){
      alert("Selecione uma dificuldade antes de iniciar!")
    }else{
      location = "./html/home.html"
    }
    
});



document.addEventListener("DOMContentLoaded", () => {

  const radios = document.querySelectorAll('input[name="fav_language"]');

  radios.forEach(radio => {
    radio.addEventListener('change', (event) => {
      const selectedDifficulty = event.target.value;
      console.log("Dificuldade selecionada:", selectedDifficulty);

 
      if (selectedDifficulty === "Facil") {
        elementsF()

        setTimeout(() => {
          setData()
        }, 500);
       
      } else if (selectedDifficulty === "Médio") {
        elementsM()
        setData()
      } else if (selectedDifficulty === "Dificil") {
        elementsD()
        setData()
      }
    });
  });
});

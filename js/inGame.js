//-- Captura de palavra do locaStorage
const wordParam = localStorage.getItem("word"); //console.log(wordParam)
const tipParam = localStorage.getItem("tip"); //console.log(tipParam)

//-- Função para remover caracteres especiais e espaços
const cleanWord = wordParam.replace(/[^a-zA-Z0-9]/g, '')

//-- Filtros de captura do localStorage
const wordFilter = Array(cleanWord.length).fill("_");  // console.log(wordFilter)
let reciveWord = document.getElementById('sendWord');  

let tryAgain = 6;


//-- Exibe a palavra dica
  function showSecretWord(){
    let wordQuiz = wordFilter.join(" "); //console.log(wordQuiz)
    document.getElementById("secretWord").textContent = "Palavra: " + wordQuiz;
    document.getElementById("tipWord").textContent = "Dica: " + tipParam;

  }
  showSecretWord()


//-- Função que exibe que o jogador venceu
  const popupWin = document.getElementById("popupWin");
  function popupWinOn(){
    popupWin.setAttribute("class", "popupWinnerOn");
  }

//-- Função que exibe que o jogador perdeu
  const popupLoser = document.getElementById("popupLoser");
  function popupLoserOn(){
    popupLoser.setAttribute("class", "popupLoserOn");
  }


//-- Filtro e exposição de letras erradas
const divWordError = document.getElementById("wordError"); //console.log(divwordError);
function wordError(){ 
 let reciveWord = document.getElementById('sendWord').value.toUpperCase(); //console.log(reciveWord);
  let p = document.createElement("p");
    p.innerHTML = reciveWord;
     divWordError.appendChild(p);
}

//-- Função principal
  const correctWord = document.getElementById("correctWord");
correctWord.addEventListener("click", () => {
  const word = reciveWord.value.trim().toUpperCase();
  if (cleanWord.includes(word)) {
    for (let i = 0; i < cleanWord.length; i++) {
      if (cleanWord[i] === word && wordFilter[i] === "_") {
        wordFilter[i] = word;
      }
    }

//-- Limpar a palavra após o acerto 
  document.getElementById("sendWord").value = "";

    if (!wordFilter.includes("_")) {
      popupWinOn();
    }
  } else {
    tryAgain--;
    switch (tryAgain) {
      case 5:
        let head = document.getElementById('hangmanHead');
        head.classList.remove('hangmanHeadOff');
        head.classList.add('hangmanHeadOn');
        
        break;
      case 4:
        let stem = document.getElementById('hangmanStem');
        stem.classList.remove('hangmanStemOff');
        stem.classList.add('hangmanStemOn');
        break;
      case 3:
        let armLeft = document.getElementById('hangmanArmLeft');
        armLeft.classList.remove('hangmanArmLeftOff');
        armLeft.classList.add('hangmanArmLeftOn');
        break;
      case 2:
        let armRight = document.getElementById('hangmanArmRight');
        armRight.classList.remove('hangmanArmRightOff');
        armRight.classList.add('hangmanArmRightOn');
        break;
      case 1:
        let legLeft = document.getElementById('hangmanLegLeft');
        legLeft.classList.remove('hangmanLegLeftOff');
        legLeft.classList.add('hangmanLegLeftOn');
        break;
      case 0:
        let legRight = document.getElementById('hangmanLegRight');
        legRight.classList.remove('hangmanLegRightOff');
        legRight.classList.add('hangmanLegRightOn');
        break;
    }

    if (tryAgain > 0) {
      // alert(`word incorreta. Tentativas restantes: ${tryAgain}`);    
      popupErrorOn()
      wordError();
//-- Limpa a palavra após o erro      
      document.getElementById("sendWord").value = '';
    } else {
      popupLoserOn();
    }
  }
  showSecretWord();
})

//-- Exibir contagem de erros
  const countError = document.getElementById("countError");

//-- Popup para a mensagem de erro 
  const popupError = document.getElementById("popupError");
  function popupErrorOn(){
    popupError.setAttribute("class", "popupErrorOn");
    countError.innerHTML = (`${tryAgain} chances`)
  }

//-- Chama o popup de resposta rapida
const answer = document.getElementById("fastAnswer");
const popupFastAnswer = document.getElementById("popupAnswer");

 answer.addEventListener("click", () => {
  popupFastAnswer.setAttribute("class", "popupAnswerOn");
 })

//-- Funcionamento de resposta rapida
const reciveAnswer = document.getElementById("sendAnswer");
 reciveAnswer.addEventListener("click", () => {
  let response = document.getElementById("answerInput").value.toUpperCase();
  if(response === cleanWord){
    popupFastAnswer.setAttribute("class", "popupAnswerOff");
    popupWinOn();
  }else{
    popupFastAnswer.setAttribute("class", "popupAnswerOff");
    popupLoserOn();
  }
 })

//-- Funcionalidade de cancelar resposta rapida
  const exitAnswer = document.getElementById("exitAnswer");
  exitAnswer.addEventListener("click", () => {
    popupFastAnswer.setAttribute("class", "popupAnswerOff");
  })

//-- Funcionalidade de tentar novamente ao errar
  const exitError = document.getElementById("exitError");
  exitError.addEventListener("click", () => {
    popupError.setAttribute("class", "popupAnswerOff");
  })

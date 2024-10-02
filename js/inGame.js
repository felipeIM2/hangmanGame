//-- CAPTURA DE PALAVRA DO INDEX.HTML
const urlParams = new URLSearchParams(window.location.search);
const wordParam = urlParams.get("word").toUpperCase(); //console.log(wordParam)
const tipParam = urlParams.get("tip").toLowerCase(); //console.log(tipParam)


//-- FILTROS E CAPTURAS DO HOME.HTML
const wordFilter = Array(wordParam.length).fill("_");
let reciveWord = document.getElementById('sendWord');
let tryAgain = 6;


//-- MOSTRAR PALAVRA SECRETA
  function showSecretWord(){
    let wordQuiz = wordFilter.join(" ");
    document.getElementById("secretWord").textContent = "Palavra: " + wordQuiz;
    document.getElementById("tipWord").textContent = "Dica: " + tipParam;

  }
  showSecretWord()


//-- FUNÇÃO PARA APARECER POPUP JOGADOR GANHOU
  const popupWin = document.getElementById("popupWin");
  function popupWinOn(){
    popupWin.setAttribute("class", "popupWinnerOn");
  }

//-- FUNÇÃO PARA APARECER POPUP JOGADOR PERDEU
  const popupLoser = document.getElementById("popupLoser");
  function popupLoserOn(){
    popupLoser.setAttribute("class", "popupLoserOn");
  }

//-- FILTRO E EXPOSIÇÃO DE PALAVRAS ERRADAS
const divWordError = document.getElementById("wordError"); //console.log(divwordError);
function wordError(){ 
 let reciveWord = document.getElementById('sendWord').value.toUpperCase(); //console.log(reciveWord);
  let p = document.createElement("p");
  p.innerHTML = reciveWord;
  divWordError.appendChild(p);

}

//-- FUNÇÃO PRINCIPAL
  const correctWord = document.getElementById("correctWord");
correctWord.addEventListener("click", () => {

  const word = reciveWord.value.trim().toUpperCase();
  if (wordParam.includes(word)) {
    for (let i = 0; i < wordParam.length; i++) {
      if (wordParam[i] === word && wordFilter[i] === "_") {
        wordFilter[i] = word;
      }
    }

//-- LIMPAR IMPUT APÓS ACERTO DA LETRA
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
      alert(`word incorreta. Tentativas restantes: ${tryAgain}`);    
      wordError();
      document.getElementById("sendWord").value = '';
    } else {
      popupLoserOn();
    }
  }
  showSecretWord();
})

//-- RESPOSTA RAPIDA

//-- CHAMA O POPUP DE RESPOSTA RAPIDA
const answer = document.getElementById("fastAnswer");
const popupFastAnswer = document.getElementById("popupAnswer");

 answer.addEventListener("click", () => {
  popupFastAnswer.setAttribute("class", "popupAnswerOn");
 })

//-- FUNCIONAMENTO DE RESPOSTA RAPIDA
const reciveAnswer = document.getElementById("sendAnswer");
 reciveAnswer.addEventListener("click", () => {
  let response = document.getElementById("answerInput").value.toUpperCase();
  if(response === wordParam){
    popupFastAnswer.setAttribute("class", "popupAnswerOff");
    popupWinOn();
  }else{
    popupFastAnswer.setAttribute("class", "popupAnswerOff");
    popupLoserOn();
  }
 })


//-- FUNCIONAMENTO DE RESPOSTA RAPIDA
const exitAnswer = document.getElementById("exitAnswer");

exitAnswer.addEventListener("click", () => {
  popupFastAnswer.setAttribute("class", "popupAnswerOff");
 })

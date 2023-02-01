const carouselText = [
  {text: "(1/31/23) Proxy page is now beta testing. Ill be giving out the username and password to some people to test. Will be all open soon!", color: "rgb(0, 255, 200)"},
  {text: "(1/26/23) Finally removed world cup from all the pages. Next update comes the proxies😈", color: "rgb(0, 255, 200)"},
  {text: "(12/16/22) ADDED WORKING BLOOKET HACKS! GET MAX COINS!", color: "rgb(0, 255, 200)"},
  {text: "(12/16/22) Added Crossy Road and Doodle Jump but u all prob arnt gonna play bc ITS ALMOST CRISTMAS and we are mostly all on break so bye!", color: "rgb(0, 255, 200)"},
  {text: "(12/05/22) Added 7 new games, bypasses.html, and request.html. Give me some games!", color: "rgb(0, 255, 200)"},
  {text: "(12/02/22) Added request.html so you can request games", color: "rgb(0, 255, 200)"},
  {text: "(12/01/22) Created the site and removed all non-working games. Added world-cup.html so you can watch it in class 😁", color: "rgb(0, 255, 200)"}
]

// use this a a templete  {text: "text", color: "red"}

$( document ).ready(async function() {
  carousel(carouselText, "#feature-text")
});

async function typeSentence(sentence, eleRef, delay = 15 ){
  const letters = sentence.split("");
  let i = 0;
  while(i < letters.length) {
    await waitForMs(delay);
    $(eleRef).append(letters[i]);
    i++
  }
  return;
}

async function deleteSentence(eleRef) {
  const sentence = $(eleRef).html();
  const letters = sentence.split("");
  let i = 0;
    $(eleRef).append("<br>");
  }

async function carousel(carouselList, eleRef) {
    var i = 0;
    while(true) {
      updateFontColor(eleRef, carouselList[i].color)
      await typeSentence(carouselList[i].text, eleRef);
      await waitForMs(250);
      await deleteSentence(eleRef);
      i++
      if(i >= carouselList.length) {return;}
    }
}

function updateFontColor(eleRef, color) {
  $(eleRef).css('color', color);
}

function waitForMs(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}


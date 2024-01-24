function generateGameField(container) {
  container.innerHTML = "";
  const gridGameElement = document.createElement("div");
  gridGameElement.classList.add("gridGame");
  for (let i = 0; i < 100; i++) {
    gridGameElement.appendChild(generateCell(i));
  }
  container.appendChild(gridGameElement);
}

function generateCell(cellIndex) {
  const cellElement = document.createElement("div");
  cellElement.classList.add("cell");
  cellElement.setAttribute("data-cellIndex", cellIndex);

  cellElement.addEventListener("click", function () {
    toggleCellElement(cellElement);
  });
  return cellElement;
}

function toggleCellElement(cell) {
  const cellIndex = cell.getAttribute("data-cellIndex");
  if (!cell.classList.contains("active")) {
    cell.classList.add("active");
    cell.innerHTML = cellIndex;
  }
  // else {
  //   cell.classList.remove("active");
  //   cell.innerHTML = "";
  // }
}

// step 1) Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.

function generateBombs() {
  const bombsArr = [];
  let bomb = 0;
  for (let i = 0; i < 16; i++) {
    bomb = generateRandNumber();
    for (let k = 0; k < bombsArr.length; k++) {
      if (bombsArr.includes(bomb)) {
        // console.log(`il valore generato e compreso nel arr`);
        do {
          bomb = generateRandNumber();
        } while (bombsArr.includes(bomb));
      }
    }
    bombsArr.push(bomb);
  }
  return bombsArr;
}

// Step 2) In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.

// Step3) La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe). Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.

/**
 *Bonus 1
 *Quando si clicca su una bomba e finisce la partita, evitare che si possa cliccare su altre celle.
 *
 *Bonus 2
 *Quando si clicca su una bomba e finisce la partita, il software scopre tutte le bombe nascoste.
 */

function isThereBomb() {}

function generateRandNumber(min = 1, max = 100) {
  if (isNaN(max) || isNaN(min)) {
    console.error("i valori dei parametri non sono corretti");
    return;
  }
  if (min > max) {
    console.error(
      "il valore del limite minore e superiore a valore del limite massimo"
    );
    return;
  }
  let randNum = Math.floor(Math.random() * (max - min) + min);
  return randNum;
}

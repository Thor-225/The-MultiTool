let currentPlayer = 'X';
let cells;
let resetBtn;
let playerScore = 0;
let aiScore = 0;
// Fikset coden ved å legge til ein code som ventet på at de andre elementene
// var lastet inn. etter det funket endelig koden som den skulle.
document.addEventListener('DOMContentLoaded', function() {
    cells = document.querySelectorAll('.cell');
    resetBtn = document.getElementById('resetBtn');
    
    cells.forEach(cell => {
    cell.addEventListener('click', handleCellClick);
    });
    
    resetBtn.addEventListener('click', redo);
    updateDisplay();
});
// Funksjon som ser når du klikker på en celle og om det gjør at du vinner,
// eller om det er uavgjort. Hvis ingen av delene skjer, bytter den spiller.
function handleCellClick() {
    if (!this.textContent) {
        this.textContent = currentPlayer;
        if (win()) {
        playerScore++;
        updateDisplay();
        if (playerScore === 3) {
            setTimeout(() => {
                alert("You beat R0B0 by reaching 3 wins! Scores reset.");
                playerScore = 0;
                aiScore = 0;
                updateDisplay();
            }, 300);
        }
        setTimeout(() => {
        alert(`${currentPlayer} You win, good job!`);
        redo();
        }, 300);
        } else if (draw()) {
        setTimeout(() => {
        alert("You and R0B0 tied! He says 'Good game!'");
        redo();
        }, 300);
        } else {
         currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
         if (currentPlayer === 'O') {
            setTimeout(R0B0, 420);
        }
      }
    }
}
// R0B0!!! Han bare velger tilfeldige blokker. Ikkje alt for smart, men klarer å spille bra nok :)
function R0B0() {
    const emptyCells = Array.from(cells).filter(cell => !cell.textContent);
    if (emptyCells.length === 0) return;
    
    const randomIndex = Math.floor(Math.random() * emptyCells.length);
    emptyCells[randomIndex].textContent = 'O';
// Win eller Tie eller forsett.
    if (win()) {
        aiScore++;
        updateDisplay();
        if (aiScore === 3) {
            setTimeout(() => {
                alert("R0B0 has reached 3 wins! Are you going easy on him? Scores reset.");
                playerScore = 0;
                aiScore = 0;
                updateDisplay();
            }, 300);
        }
        setTimeout(() => {
        alert('R0B0 triumphs!');
        redo();
        }, 300);
    } else if (draw()) {
        setTimeout(() => {
        alert("You and R0B0 tied! He says 'Good game!'");
        redo();
        }, 300);
    } else {
    currentPlayer = 'X';
    }
}
// Hva kombinasjoner som vinner spillet. Vis ingen av desse skjer innen alle celler er fylt,
// så er det uavgjort.
function win() {
    const WomboCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];
//  WomboCombos :)
    return WomboCombos.some(combo => {
    return combo.every(index => {
    return cells[index].textContent === currentPlayer;
 });
 });
}
//Hvis alle celler er fylt in så vinner ingen og det blir uavgjort.
function draw() {
    return Array.from(cells).every(cell => {
        return cell.textContent;
});
}
// Reset knappen er linket til denne som starter spillet på nytt og gir kontroll til X.
function redo() {
    cells.forEach(cell => {
    cell.textContent = '';
});
currentPlayer = 'X';
}

function updateDisplay() {
    document.getElementById('playerScore').textContent = playerScore;
    document.getElementById('aiScore').textContent = aiScore;
}
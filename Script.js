/* filepath: c:\Users\skjel\OneDrive\Vg1\Programmering\Swiss Army Knife\Script.js */
let currentPlayer = 'X';
const cells = document.querySelectorAll('.cell');

cells.forEach(cell => {
    cell.addEventListener('click', handleCellClick);
});

function handleCellClick() {
    if (!this.textContent) {
        this.textContent = currentPlayer;
        if (checkWin()) {
            setTimeout(() => {
                alert(`${currentPlayer} wins!`);
                reset();
            }, 300);
        } else if (checkDraw()) {
            setTimeout(() => {
                alert("It's a draw!");
                reset();
            }, 300);
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            if (currentPlayer === 'O') {
                setTimeout(computerMove, 500);
            }
        }
    }
}

function computerMove() {
    const emptyCells = Array.from(cells).filter(cell => !cell.textContent);
    if (emptyCells.length === 0) return;
    
    const randomIndex = Math.floor(Math.random() * emptyCells.length);
    emptyCells[randomIndex].textContent = 'O';
    
    if (checkWin()) {
        setTimeout(() => {
            alert('Computer wins!');
            reset();
        }, 300);
    } else if (checkDraw()) {
        setTimeout(() => {
            alert("It's a draw!");
            reset();
        }, 300);
    } else {
        currentPlayer = 'X';
    }
}

function checkWin() {
    const winningCombos = [
        [1, 2, 3], [4, 5, 6], [7, 8, 9],
        [1, 4, 7], [2, 5, 8], [3, 6, 9],
        [1, 5, 9], [3, 5, 7]
    ];

    return winningCombos.some(combo => {
        return combo.every(pos => {
            return document.getElementById(pos).textContent === currentPlayer;
        });
    });
}

function checkDraw() {
    return Array.from(cells).every(cell => {
        return cell.textContent;
    });
}

function reset() {
    cells.forEach(cell => {
        cell.textContent = '';
    });
    currentPlayer = 'X';
}
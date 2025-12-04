let currentPlayer = 'X';
const cells = document.querySelectorAll('.cell');

cells.forEach(cell => {
    cell.addEventListener('click', handleCellClick);
});

function handleCellClick() {
    if (!this.textContent) {
        this.textContent = currentPlayer;
        if (checkWin()) {
            alert(`${currentPlayer} wins!`);
            reset();
        } else if (checkDraw()) {
            alert("It's a draw!");
            reset();
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            if (currentPlayer === 'O') {
                setTimeout(computerMove, 500);
            }
        }
    }
}

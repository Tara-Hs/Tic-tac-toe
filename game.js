
var squares = document.querySelectorAll('.board div');
var playerDisplay = document.querySelector('#player');
var restartBtn = document.querySelector('.restart-btn');

var currentPlayer = 'PLAYER-X'



function handleClick(event) {
    playerDisplay.innerHTML = currentPlayer
    if(currentPlayer === 'PLAYER-X') {
        event.currentTarget.classList.add('PLAYER-X')
        currentPlayer = 'PLAYER-O'
    } else {
        event.currentTarget.classList.add('PLAYER-O')
        currentPlayer = 'PLAYER-X'
    }
    
        
    if(squares[0].classList.contains('PLAYER-O')&&squares[1].classList.contains('PLAYER-O')&&squares[2].classList.contains('PLAYER-O') == true) {
        document.querySelector('.top-board').textContent = 'O wins!';
        document.querySelector('.top-board').style.color='#FF0000';
        document.querySelector('.top-board').style.fontSize='60px';
        document.querySelector('.top-board').align='center';
        alert('O Won! Go for Another Round!')
    } else if(squares[3].classList.contains('PLAYER-O')&&squares[4].classList.contains('PLAYER-O')&&squares[5].classList.contains('PLAYER-O') == true) {
        document.querySelector('.top-board').textContent = 'O wins!';
        document.querySelector('.top-board').style.color='#FF0000';
        document.querySelector('.top-board').style.fontSize='60px';
        document.querySelector('.top-board').align='center';
        alert('O Won! Go for Another Round!')
    } else if(squares[6].classList.contains('PLAYER-O')&&squares[7].classList.contains('PLAYER-O')&&squares[8].classList.contains('PLAYER-O') == true) {
        document.querySelector('.top-board').textContent = 'O wins!';
        document.querySelector('.top-board').style.color='#FF0000';
        document.querySelector('.top-board').style.fontSize='60px';
        document.querySelector('.top-board').align='center';
        alert('O Won! Go for Another Round!')
    } else if(squares[0].classList.contains('PLAYER-O')&&squares[3].classList.contains('PLAYER-O')&&squares[6].classList.contains('PLAYER-O') == true) {
        document.querySelector('.top-board').textContent = 'O wins!';
        document.querySelector('.top-board').style.color='#FF0000';
        document.querySelector('.top-board').style.fontSize='60px';
        document.querySelector('.top-board').align='center';
        alert('O Won! Go for Another Round!')
    } else if(squares[1].classList.contains('PLAYER-O')&&squares[4].classList.contains('PLAYER-O')&&squares[7].classList.contains('PLAYER-O') == true) {
        document.querySelector('.top-board').textContent = 'O wins!';
        document.querySelector('.top-board').style.color='#FF0000';
        document.querySelector('.top-board').style.fontSize='60px';
        document.querySelector('.top-board').align='center';
        alert('O Won! Go for Another Round!')
    } else if(squares[2].classList.contains('PLAYER-O')&&squares[5].classList.contains('PLAYER-O')&&squares[8].classList.contains('PLAYER-O') == true) {
        document.querySelector('.top-board').textContent = 'O wins!';
        document.querySelector('.top-board').style.color='#FF0000';
        document.querySelector('.top-board').style.fontSize='60px';
        document.querySelector('.top-board').align='center';
        alert('O Won! Go for Another Round!')
    } else if(squares[0].classList.contains('PLAYER-O')&&squares[4].classList.contains('PLAYER-O')&&squares[8].classList.contains('PLAYER-O') == true) {
        document.querySelector('.top-board').textContent = 'O wins!';
        document.querySelector('.top-board').style.color='#FF0000';
        document.querySelector('.top-board').style.fontSize='60px';
        document.querySelector('.top-board').align='center';
        alert('O Won! Go for Another Round!')
    } else if(squares[2].classList.contains('PLAYER-O')&&squares[4].classList.contains('PLAYER-O')&&squares[6].classList.contains('PLAYER-O') == true) {
        document.querySelector('.top-board').textContent = 'O wins!';
        document.querySelector('.top-board').style.color='#FF0000';
        document.querySelector('.top-board').style.fontSize='60px';
        document.querySelector('.top-board').align='center';
        alert('O Won! Go for Another Round!')
    } else if(squares[0].classList.contains('PLAYER-X')&&squares[1].classList.contains('PLAYER-X')&&squares[2].classList.contains('PLAYER-X') == true) {
        document.querySelector('.top-board').textContent = 'X wins!';
        document.querySelector('.top-board').style.color='#1F51FF';
        document.querySelector('.top-board').style.fontSize='60px';
        document.querySelector('.top-board').align='center';
        alert('X Won! Go for Another Round!')
    } else if(squares[3].classList.contains('PLAYER-X')&&squares[4].classList.contains('PLAYER-X')&&squares[5].classList.contains('PLAYER-X') == true) {
        document.querySelector('.top-board').textContent = 'X wins!';
        document.querySelector('.top-board').style.color='#1F51FF';
        document.querySelector('.top-board').style.fontSize='60px';
        document.querySelector('.top-board').align='center';
        alert('X Won! Go for Another Round!')
    } else if(squares[6].classList.contains('PLAYER-X')&&squares[7].classList.contains('PLAYER-X')&&squares[8].classList.contains('PLAYER-X') == true) {
        document.querySelector('.top-board').textContent = 'X wins!';
        document.querySelector('.top-board').style.color='#1F51FF';
        document.querySelector('.top-board').style.fontSize='60px';
        document.querySelector('.top-board').align='center';
        alert('X Won! Go for Another Round!')
    } else if(squares[0].classList.contains('PLAYER-X')&&squares[3].classList.contains('PLAYER-X')&&squares[6].classList.contains('PLAYER-X') == true) {
        document.querySelector('.top-board').textContent = 'X wins!';
        document.querySelector('.top-board').style.color='#1F51FF';
        document.querySelector('.top-board').style.fontSize='60px';
        document.querySelector('.top-board').align='center';
        alert('X Won! Go for Another Round!')
    } else if(squares[1].classList.contains('PLAYER-X')&&squares[4].classList.contains('PLAYER-X')&&squares[7].classList.contains('PLAYER-X') == true) {
        document.querySelector('.top-board').textContent = 'X wins!';
        document.querySelector('.top-board').style.color='#1F51FF';
        document.querySelector('.top-board').style.fontSize='60px';
        document.querySelector('.top-board').align='center';
        alert('X Won! Go for Another Round!')
    } else if(squares[2].classList.contains('PLAYER-X')&&squares[5].classList.contains('PLAYER-X')&&squares[8].classList.contains('PLAYER-X') == true) {
        document.querySelector('.top-board').textContent = 'X wins!';
        document.querySelector('.top-board').style.color='#1F51FF';
        document.querySelector('.top-board').style.fontSize='60px';
        document.querySelector('.top-board').align='center';
        alert('X Won! Go for Another Round!')
    } else if(squares[0].classList.contains('PLAYER-X')&&squares[4].classList.contains('PLAYER-X')&&squares[8].classList.contains('PLAYER-X') == true) {
        document.querySelector('.top-board').textContent = 'X wins!';
        document.querySelector('.top-board').style.color='#1F51FF';
        document.querySelector('.top-board').style.fontSize='60px';
        document.querySelector('.top-board').align='center';
        alert('X Won! Go for Another Round!')
    } else if(squares[2].classList.contains('PLAYER-X')&&squares[4].classList.contains('PLAYER-X')&&squares[6].classList.contains('PLAYER-X') == true) {
        document.querySelector('.top-board').textContent = 'X wins!';
        document.querySelector('.top-board').style.color='#1F51FF';
        document.querySelector('.top-board').style.fontSize='60px';
        document.querySelector('.top-board').align='center';
        alert('X Won! Go for Another Round!')
    } 

    
}


for(i=0; i < squares.length; i++) {
    squares[i].addEventListener('click', handleClick, { once: true })
}





// function restartGame() {

//     squares[index].classList.remove('.PLAYER-X')
//     squares[index].classList.remove('.PLAYER-O')
    
// }

// restartBtn.addEventListener('click', restartGame)

function refreshPage(){
    window.location.reload();
} 
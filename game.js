
var squares = document.querySelectorAll('.board div');
var playerDisplay = document.querySelector('#player');
var restartBtn = document.querySelector('.restart-btn');
var currentPlayer = 'PLAYER-X'
var clickSoundX = new Audio('sounds/click.mp3');
var clickSoundO = new Audio('sounds/clickO.mp3');
var winSound = new Audio('sounds/people.mp3');
var backgroundSound = new Audio('sounds/backgroundSound.mp3');
var drawSound = new Audio('sounds/crash.mp3')

function preload() {
    clickSoundX = loadsound('sounds/click.mp3')
}

clickSoundX.addEventListener('click', preload)

function preload() {
    clickSoundO = loadsound('sounds/clickO.mp3')
}

clickSoundO.addEventListener('click', preload)

function preload() {
    winSound = preload('sounds/people.mp3')
}

winSound.addEventListener('click', preload)

function preload() {
    backgroundSound = preload('sounds/backgroundSound.mp3')
}

backgroundSound.addEventListener('click', preload)


function preload() {
    drawSound = loadsound('sounds/crash.mp3')
}

drawSound.addEventListener('click', preload)


function handleClick(event) {
    backgroundSound.play();
    playerDisplay.innerHTML = currentPlayer
    if(currentPlayer === 'PLAYER-X') {
        clickSoundX.play();
        event.currentTarget.classList.add('PLAYER-X')
        currentPlayer = 'PLAYER-O'
    } else {
        clickSoundO.play();
        event.currentTarget.classList.add('PLAYER-O')
        currentPlayer = 'PLAYER-X'
    }
    
        
    if(squares[0].classList.contains('PLAYER-O')&&squares[1].classList.contains('PLAYER-O')&&squares[2].classList.contains('PLAYER-O') == true) {
       
        document.querySelector('.top-board').textContent = 'O wins!';
        document.querySelector('.top-board').style.color='#FF0000';
        document.querySelector('.top-board').style.fontSize='60px';
        document.querySelector('.top-board').align='center';
        winSound.play();
    } else if(squares[3].classList.contains('PLAYER-O')&&squares[4].classList.contains('PLAYER-O')&&squares[5].classList.contains('PLAYER-O') == true) {
        document.querySelector('.top-board').textContent = 'O wins!';
        document.querySelector('.top-board').style.color='#FF0000';
        document.querySelector('.top-board').style.fontSize='60px';
        document.querySelector('.top-board').align='center';
        winSound.play();
    } else if(squares[6].classList.contains('PLAYER-O')&&squares[7].classList.contains('PLAYER-O')&&squares[8].classList.contains('PLAYER-O') == true) {
        document.querySelector('.top-board').textContent = 'O wins!';
        document.querySelector('.top-board').style.color='#FF0000';
        document.querySelector('.top-board').style.fontSize='60px';
        document.querySelector('.top-board').align='center';
        winSound.play();
    } else if(squares[0].classList.contains('PLAYER-O')&&squares[3].classList.contains('PLAYER-O')&&squares[6].classList.contains('PLAYER-O') == true) {
        document.querySelector('.top-board').textContent = 'O wins!';
        document.querySelector('.top-board').style.color='#FF0000';
        document.querySelector('.top-board').style.fontSize='60px';
        document.querySelector('.top-board').align='center';
        winSound.play();
    } else if(squares[1].classList.contains('PLAYER-O')&&squares[4].classList.contains('PLAYER-O')&&squares[7].classList.contains('PLAYER-O') == true) {
        document.querySelector('.top-board').textContent = 'O wins!';
        document.querySelector('.top-board').style.color='#FF0000';
        document.querySelector('.top-board').style.fontSize='60px';
        document.querySelector('.top-board').align='center';
        winSound.play();
    } else if(squares[2].classList.contains('PLAYER-O')&&squares[5].classList.contains('PLAYER-O')&&squares[8].classList.contains('PLAYER-O') == true) {
        document.querySelector('.top-board').textContent = 'O wins!';
        document.querySelector('.top-board').style.color='#FF0000';
        document.querySelector('.top-board').style.fontSize='60px';
        document.querySelector('.top-board').align='center';
        winSound.play();
    } else if(squares[0].classList.contains('PLAYER-O')&&squares[4].classList.contains('PLAYER-O')&&squares[8].classList.contains('PLAYER-O') == true) {
        document.querySelector('.top-board').textContent = 'O wins!';
        document.querySelector('.top-board').style.color='#FF0000';
        document.querySelector('.top-board').style.fontSize='60px';
        document.querySelector('.top-board').align='center';
        winSound.play();
    } else if(squares[2].classList.contains('PLAYER-O')&&squares[4].classList.contains('PLAYER-O')&&squares[6].classList.contains('PLAYER-O') == true) {
        document.querySelector('.top-board').textContent = 'O wins!';
        document.querySelector('.top-board').style.color='#FF0000';
        document.querySelector('.top-board').style.fontSize='60px';
        document.querySelector('.top-board').align='center';
        winSound.play();
    } else if(squares[0].classList.contains('PLAYER-X')&&squares[1].classList.contains('PLAYER-X')&&squares[2].classList.contains('PLAYER-X') == true) {
        document.querySelector('.top-board').textContent = 'X wins!';
        document.querySelector('.top-board').style.color='#1F51FF';
        document.querySelector('.top-board').style.fontSize='60px';
        document.querySelector('.top-board').align='center';
        winSound.play();
    } else if(squares[3].classList.contains('PLAYER-X')&&squares[4].classList.contains('PLAYER-X')&&squares[5].classList.contains('PLAYER-X') == true) {
        document.querySelector('.top-board').textContent = 'X wins!';
        document.querySelector('.top-board').style.color='#1F51FF';
        document.querySelector('.top-board').style.fontSize='60px';
        document.querySelector('.top-board').align='center';
        winSound.play();
    } else if(squares[6].classList.contains('PLAYER-X')&&squares[7].classList.contains('PLAYER-X')&&squares[8].classList.contains('PLAYER-X') == true) {
        document.querySelector('.top-board').textContent = 'X wins!';
        document.querySelector('.top-board').style.color='#1F51FF';
        document.querySelector('.top-board').style.fontSize='60px';
        document.querySelector('.top-board').align='center';
        winSound.play();
    } else if(squares[0].classList.contains('PLAYER-X')&&squares[3].classList.contains('PLAYER-X')&&squares[6].classList.contains('PLAYER-X') == true) {
        document.querySelector('.top-board').textContent = 'X wins!';
        document.querySelector('.top-board').style.color='#1F51FF';
        document.querySelector('.top-board').style.fontSize='60px';
        document.querySelector('.top-board').align='center';
        winSound.play();
    } else if(squares[1].classList.contains('PLAYER-X')&&squares[4].classList.contains('PLAYER-X')&&squares[7].classList.contains('PLAYER-X') == true) {
        document.querySelector('.top-board').textContent = 'X wins!';
        document.querySelector('.top-board').style.color='#1F51FF';
        document.querySelector('.top-board').style.fontSize='60px';
        document.querySelector('.top-board').align='center';
        winSound.play();
    } else if(squares[2].classList.contains('PLAYER-X')&&squares[5].classList.contains('PLAYER-X')&&squares[8].classList.contains('PLAYER-X') == true) {
        document.querySelector('.top-board').textContent = 'X wins!';
        document.querySelector('.top-board').style.color='#1F51FF';
        document.querySelector('.top-board').style.fontSize='60px';
        document.querySelector('.top-board').align='center';
        winSound.play();
    } else if(squares[0].classList.contains('PLAYER-X')&&squares[4].classList.contains('PLAYER-X')&&squares[8].classList.contains('PLAYER-X') == true) {
        document.querySelector('.top-board').textContent = 'X wins!';
        document.querySelector('.top-board').style.color='#1F51FF';
        document.querySelector('.top-board').style.fontSize='60px';
        document.querySelector('.top-board').align='center';
        winSound.play();
    } else if(squares[2].classList.contains('PLAYER-X')&&squares[4].classList.contains('PLAYER-X')&&squares[6].classList.contains('PLAYER-X') == true) {
        document.querySelector('.top-board').textContent = 'X wins!';
        document.querySelector('.top-board').style.color='#1F51FF';
        document.querySelector('.top-board').style.fontSize='60px';
        document.querySelector('.top-board').align='center';
        winSound.play();
    } else if(squares[0].classList.contains('PLAYER-X')&&squares[4].classList.contains('PLAYER-O')&&squares[8].classList.contains('PLAYER-X')&&squares[1].classList.contains('PLAYER-O')&&squares[7].classList.contains('PLAYER-X')&&squares[6].classList.contains('PLAYER-O')&&squares[2].classList.contains('PLAYER-X')&&squares[5].classList.contains('PLAYER-O')) {
        document.querySelector('.top-board').textContent = 'Draw!';
        document.querySelector('.top-board').style.color='#1F51FF';
        document.querySelector('.top-board').style.fontSize='60px';
        document.querySelector('.top-board').align='center';
        drawSound.play();
        
    } else if(squares[0].classList.contains('PLAYER-X')&&squares[4].classList.contains('PLAYER-O')&&squares[5].classList.contains('PLAYER-X')&&squares[1].classList.contains('PLAYER-O')&&squares[7].classList.contains('PLAYER-X')&&squares[6].classList.contains('PLAYER-O')&&squares[2].classList.contains('PLAYER-X')&&squares[8].classList.contains('PLAYER-O')) {
        document.querySelector('.top-board').textContent = 'Draw!';
        document.querySelector('.top-board').style.color='#1F51FF';
        document.querySelector('.top-board').style.fontSize='60px';
        document.querySelector('.top-board').align='center';
        drawSound.play();
    } else if(squares[0].classList.contains('PLAYER-X')&&squares[4].classList.contains('PLAYER-O')&&squares[5].classList.contains('PLAYER-X')&&squares[1].classList.contains('PLAYER-O')&&squares[7].classList.contains('PLAYER-X')&&squares[8].classList.contains('PLAYER-O')&&squares[3].classList.contains('PLAYER-X')&&squares[6].classList.contains('PLAYER-O')) {
        document.querySelector('.top-board').textContent = 'Draw!';
        document.querySelector('.top-board').style.color='#1F51FF';
        document.querySelector('.top-board').style.fontSize='60px';
        document.querySelector('.top-board').align='center';
        drawSound.play();
    } else if(squares[0].classList.contains('PLAYER-X')&&squares[4].classList.contains('PLAYER-O')&&squares[5].classList.contains('PLAYER-X')&&squares[2].classList.contains('PLAYER-O')&&squares[6].classList.contains('PLAYER-X')&&squares[3].classList.contains('PLAYER-O')&&squares[7].classList.contains('PLAYER-X')&&squares[8].classList.contains('PLAYER-O')) {
        document.querySelector('.top-board').textContent = 'Draw!';
        document.querySelector('.top-board').style.color='#1F51FF';
        document.querySelector('.top-board').style.fontSize='60px';
        document.querySelector('.top-board').align='center';
        drawSound.play();
    } else if(squares[0].classList.contains('PLAYER-X')&&squares[4].classList.contains('PLAYER-O')&&squares[5].classList.contains('PLAYER-X')&&squares[7].classList.contains('PLAYER-O')&&squares[1].classList.contains('PLAYER-X')&&squares[2].classList.contains('PLAYER-O')&&squares[6].classList.contains('PLAYER-X')&&squares[3].classList.contains('PLAYER-O')) {
        document.querySelector('.top-board').textContent = 'Draw!';
        document.querySelector('.top-board').style.color='#1F51FF';
        document.querySelector('.top-board').style.fontSize='60px';
        document.querySelector('.top-board').align='center';
        drawSound.play();
    } else if(squares[0].classList.contains('PLAYER-X')&&squares[4].classList.contains('PLAYER-O')&&squares[5].classList.contains('PLAYER-X')&&squares[8].classList.contains('PLAYER-O')&&squares[1].classList.contains('PLAYER-X')&&squares[2].classList.contains('PLAYER-O')&&squares[6].classList.contains('PLAYER-X')&&squares[3].classList.contains('PLAYER-O')) {
        document.querySelector('.top-board').textContent = 'Draw!';
        document.querySelector('.top-board').style.color='#1F51FF';
        document.querySelector('.top-board').style.fontSize='60px';
        document.querySelector('.top-board').align='center';
        drawSound.play();
    } else if(squares[0].classList.contains('PLAYER-X')&&squares[4].classList.contains('PLAYER-O')&&squares[5].classList.contains('PLAYER-X')&&squares[8].classList.contains('PLAYER-O')&&squares[2].classList.contains('PLAYER-X')&&squares[1].classList.contains('PLAYER-O')&&squares[7].classList.contains('PLAYER-X')&&squares[3].classList.contains('PLAYER-O')) {
        document.querySelector('.top-board').textContent = 'Draw!';
        document.querySelector('.top-board').style.color='#1F51FF';
        document.querySelector('.top-board').style.fontSize='60px';
        document.querySelector('.top-board').align='center';
        drawSound.play();
    } else if(squares[0].classList.contains('PLAYER-X')&&squares[4].classList.contains('PLAYER-O')&&squares[5].classList.contains('PLAYER-X')&&squares[8].classList.contains('PLAYER-O')&&squares[6].classList.contains('PLAYER-X')&&squares[3].classList.contains('PLAYER-O')&&squares[1].classList.contains('PLAYER-X')&&squares[2].classList.contains('PLAYER-O')) {
        document.querySelector('.top-board').textContent = 'Draw!';
        document.querySelector('.top-board').style.color='#1F51FF';
        document.querySelector('.top-board').style.fontSize='60px';
        document.querySelector('.top-board').align='center';
        drawSound.play();
    } 

}


for(i=0; i < squares.length; i++) {
    squares[i].addEventListener('click', handleClick, { once: true })
}





function refreshPage(){
    window.location.reload();
    
    
} 



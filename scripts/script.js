var livesCount =10;

document.addEventListener('DOMContentLoaded', ()=>{
    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
    'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
    't', 'u', 'v', 'w', 'x', 'y', 'z'];

    const Header = document.createElement('h1');
    Header.innerText = 'HangMan Game';

    const desc = document.createElement('p');
    desc.innerText ='This Game Designed by Hayat & Zryan';

    const alphabetDiv = document.createElement('div');
    alphabetDiv.id = "alphabets";

    alphabet.forEach((lit)=>{
        const litter = document.createElement('button');
        litter.innerText = lit;
        alphabetDiv.appendChild(litter);
    })

    const word = document.createElement('div');
    word.id = "letters";
    
    const livesDiv = document.createElement('div');
    const testLives = document.createElement('h2');
    testLives.innerHTML = 'You have  <span id="lives"> </span> Lives';
    livesDiv.appendChild(testLives);

    const result = document.createElement('div');
    result.id = "result";

    const playAgain = document.createElement('input');
    playAgain.type='button';
    playAgain.id = "play";
    playAgain.value = "Play Again";
    playAgain.addEventListener('click', PlayAgain);

    const hint = document.createElement('input');
    hint.type='button';
    hint.id = "hint";
    hint.value = "Hint";
    hint.addEventListener('click',GetHint);

    document.body.appendChild(Header);
    document.body.appendChild(desc);
    document.body.appendChild(alphabetDiv);
    document.body.appendChild(word);
    document.body.appendChild(livesDiv);
    document.body.appendChild(result);
    document.body.appendChild(playAgain);
    document.body.appendChild(hint);
    
    const livesCounter = document.getElementById('lives');
    lives.innerText = livesCount;

    startGame();
})

function startGame(){
    fetch("https://random-word-api.herokuapp.com/word?number=1")
    .then(response => response.json())
    .then(res=> {
        parseWord(res[0]);
        console.log(res[0],res[0].length);
    });

    //parseWord('hayat');
}


var wordLength =0;
var correct =0;
var notWin =false;
function parseWord(word){
    const result = document.getElementById('result');
    const inputLetters = document.createElement('p');
    const button = document.querySelectorAll('button');
    wordLength = word.length;
    for(let i = 0; i < wordLength; i++){
        const letter = document.createElement('span');
        letter.id = i;
        letter.innerText += '_';
        inputLetters.appendChild(letter);

        
    }
    
    button.forEach((btn)=>{
        btn.addEventListener('click',()=>{
            if(word.includes(btn.innerText)){
                
                const indexes = [];
                for(let i =0; i<word.length;i++){
                    if(word[i]===btn.innerText){
                        indexes.push(i);
                    }
                }
                indexes.forEach((index)=>{
                    const dst = document.getElementById(index);
                    dst.innerText = btn.innerText;
                    console.log(index);
                    correct++;
                });
                if(correct === wordLength){
                    result.innerHTML = "<h3>YOU WIN!!</h3>";
                    disableButtons();
                }
            }
            else{
                
                livesCount--;
                const livesCounter = document.getElementById('lives');
                livesCounter.innerText = livesCount;

                if(livesCount===0){
                    result.innerHTML = "<h3>GAME OVER!</h3>";
                    disableButtons();
                }
            }
            btn.disabled = true;
        });
        
    });
    result.appendChild(inputLetters);

    

}

function disableButtons(){
    const buttons = document.querySelectorAll('button');
    buttons.forEach(btn =>{
        btn.disabled = true;
    })
}

function PlayAgain(){
    const buttons = document.querySelectorAll('button');
    buttons.forEach(btn =>{
        btn.disabled = false;
    })
    livesCount = 10;
    const result = document.getElementById('result');
    result.innerHTML = "<h3></h3>";
    startGame();
}

function GetHint(){

}
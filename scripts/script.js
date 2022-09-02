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
    
    const lives = document.createElement('div');
    lives.innerHTML = '<h2>You have  <span id="lives"> </span> Lives</h2>';

    const result = document.createElement('div');
    result.id = "result";

    document.body.appendChild(Header);
    document.body.appendChild(desc);
    document.body.appendChild(alphabetDiv);
    document.body.appendChild(word);
    document.body.appendChild(lives);
    document.body.appendChild(result);
    
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



function parseWord(word){
    const wordLength = word.length;
    const result = document.getElementById('result');
    const inputLetters = document.createElement('p');
    const button = document.querySelectorAll('button');

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
                });
            }
            btn.disabled = true;
        });
        
    });
    result.appendChild(inputLetters);

    

}


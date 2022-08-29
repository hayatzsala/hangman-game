fetch("https://random-word-api.herokuapp.com/word?number=1")
.then(response => response.json())
.then(res=> {
    //parseWord(res[0]);
    console.log(res[0],res[0].length);

});

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
                const dst = document.getElementById(word.indexOf(btn.innerText));
                dst.innerText = btn.innerText;
                console.log(word.indexOf(btn.innerText));
            }
        })
    });
    result.appendChild(inputLetters);

    

}
parseWord('hayat');

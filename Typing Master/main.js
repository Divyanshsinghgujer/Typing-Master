window.addEventListener("load",init)

const wordInput=document.querySelector("#word-input")
const currentWord=document.querySelector("#current-word")
//console.log(currentWord)
const scoreDisplay=document.querySelector("#score")
const timeDisplay=document.querySelector("#time")
//console.log(timeDisplay)
const message=document.querySelector("#message")

let score=0
let time=5


//array of words
const words = [
    'hat',
    'river',
    'lucky',
    'statue',
    'stubborn',
    'cocktail',
    'runaway',
    'cooler',
    'hat',
    'nutrition',
    'echo',
    'sibling',
    'children',
    'developer',
    'investigstion',
    'cricket',
    'program',
    'javascript',
];

//console.log(words)

function init(){
    showWords(words)
    wordInput.addEventListener("input",startMatch)
    setInterval(countdown,1000)
    setInterval(checkStatus,50)
}

function checkStatus(){
    if(time==0){
        message.innerHTML="Game over!!! "
    }
}





function countdown(){
    if(time>0){
        time--
    
    }
    timeDisplay.innerHTML= time
}





function showWords(words){
    const randomIndex=Math.floor(Math.random()*words.length)
    //console.log(words[randomIndex])
    currentWord.innerHTML=words[randomIndex]
}

function matchWords(){
    if(wordInput.value==currentWord.innerHTML){
        return true
    }else{
        return false
    }
}




function startMatch(){
    console.log("start!!!")
    if(matchWords()){
        showWords(words)
        message.innerHTML="yup!!"
        wordInput.value=''
        score++
        time=6
    }else{
        message.innerHTML=("Karwali bezzati")
    }
    scoreDisplay.innerHTML=score

}
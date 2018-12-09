document.addEventListener('DOMContentLoaded', appStart)

const sound = 
{
    97 :"boom",
    115:"clap",
    100:"hihat",
    102:"kick",
    103:"openhat",
    104:"ride",
    106:"snare",
    107:"tink",
    108:"tom",
}

const chanel1 = []

let isRec = false
let recStartTime = 0
function appStart()
{
    window.addEventListener('keypress', playSound)
    document.querySelector('#rec').addEventListener('click', recAudio)
    document.querySelector('#play').addEventListener('click', playAudio)
}

function playSound(e)
{
    const soundName = sound[e.charCode]
    const audioDOM = document.querySelector(`#${soundName}`)
    audioDOM.play()
    
    if (isRec) 
    {
       chanel1.push(
        {
            name:soundName,
            time:Date.now()-recStartTime
        } 
       ) 
    }
   
    
    // document.body.innerHTML += e.charCode + '<br>'
}

function recAudio(e)
{
    isRec = !isRec
    recStartTime = Date.now()

    e.target.innerHTML = isRec? "Zatrzymaj":"Nagrywaj"
}
function playAudio() 
{
    
}
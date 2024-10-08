const displayNumber = document.getElementById('counter')
const increament = document.getElementById('plus');
const decreament = document.getElementById('minus');
const pause = document.getElementById('pause');
const like = document.getElementById('heart');
const likeMessages = document.getElementById('message')
const form = document.getElementById('comment-form');



let intervalId = setInterval( function(){    
    
    if (parseInt(displayNumber.textContent) < 20){
        displayNumber.textContent = parseInt(displayNumber.textContent) + 1
    }
    else{
        displayNumber.textContent = 0
    }
    
},1000)

increament.addEventListener('click', function(){
    displayNumber.innerText = parseInt(displayNumber.innerText) + 1;
})

decreament.addEventListener('click', function(){
    displayNumber.innerText = parseInt(displayNumber.innerText) - 1;
})

pause.addEventListener('click', pauseCallback);



function resumeCallback(){
    intervalId = setInterval( function(){    
    
        if (parseInt(displayNumber.textContent) < 20){
            displayNumber.textContent = parseInt(displayNumber.textContent) + 1
        }
        else{
            displayNumber.textContent = 0
        }
        
    },1000)
    increament.disabled = false;
    decreament.disabled = false;
    pause.innerText = ' Pause' 

    pause.removeEventListener('click', resumeCallback) 
    
}
function pauseCallback(){
    clearInterval(intervalId)
    increament.disabled = true;
    decreament.disabled = true;
    pause.innerText = 'Resume'  
   
    pause.addEventListener('click', resumeCallback)

}
let likeMessage =null
let likeCount = 0;
like.addEventListener('click', function(e){
    likeCount ++
    
        likeMessage = document.createElement('p');
        likeMessages.appendChild(likeMessage)
    
    
    likeMessage.innerHTML =`
    ${displayNumber.innerText} was liked ${likeCount} times.
    `
    
    
})
form.addEventListener('submit', function(event){
    event.preventDefault()
    const commentTile = document.querySelector('#list')
    const comment = document.createElement('p')
    const inputForm = document.querySelector('#comment-input')
    comment.innerText = `${inputForm.value}`
    commentTile.appendChild(comment)
    form.reset()
})

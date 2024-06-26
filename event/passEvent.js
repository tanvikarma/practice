function handlEvent(event){
    console.log("event handled");
    nextFunction(event);
}
function nextFunction(event){
    console.log("event type", event.type);
}

document.getElementById('mybutton').addEventListener('click',handlEvent)
const $ = identifier => document.querySelector(identifier);
let parag = $("#displayText");
$("#fontSelect").addEventListener("click", function(){
    let font = $("#fontSelect").value;
    parag.style.fontFamily = font;
})
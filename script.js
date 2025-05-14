const $ = identifier => document.querySelector(identifier);
let parag = $("#displayText");
$("#fontSelect").addEventListener("click", function(){
    let font = $("#fontSelect").value;
    parag.style.fontFamily = font;
})

$("#sizeSelect").addEventListener("click", function(){
    let size = $("#sizeSelect").value;
    console.log(size);
    $("#displayText").fontSize = size;
})
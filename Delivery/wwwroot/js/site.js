// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

let count = 1;
document.getElementById("radio1").checked = true;
setInterval( function(){
    nextImage();
}, 3000)

function nextImage(){
    count++;
    if(count>6){
        count = 1;
    }
document.getElementById("radio"+count).checked = true;
}


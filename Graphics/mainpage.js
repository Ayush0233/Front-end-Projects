let eye = document.getElementById("img1");
let btn1 = document.getElementById("btn1");
btn1.onclick = function (){
    if(eye.style.display !== "none"){
        eye.style.display = "none";
        btn1.style.backgroundColor = "#e79e3d";
    }
    else{
        eye.style.display = "block";
        eye.style.transition = "0.32s";
        btn1.style.backgroundColor = "#3da588";
    }
}
let tm = document.getElementById("img2");
let btn2 = document.getElementById("btn2");
btn2.onclick = function (){
    if(tm.style.display !== "none"){
        tm.style.display = "none";
    }
    else{
        tm.style.display = "block";
        tm.style.transition = "0.32s";
    }
}
let diva = document.getElementById("img3");
let btn3 = document.getElementById("btn3");
btn3.onclick = function (){
    if(diva.style.display !== "none"){
        diva.style.display = "none";
    }
    else{
        diva.style.display = "block";
        diva.style.transition = "0.32s";
    }
}
let love = document.getElementById("img4");
let btn4 = document.getElementById("btn4");
btn4.onclick = function (){
    if(love.style.display !== "none"){
        love.style.display = "none";
    }
    else{
        love.style.display = "block";
        love.style.transition = "0.32s";
    }
}
let shield = document.getElementById("img5");
let btn5 = document.getElementById("btn5");
btn5.onclick = function (){
    if(shield.style.display !== "none"){
        shield.style.display = "none";
    }
    else{
        shield.style.display = "block";
        shield.style.transition = "0.32s";
    }
}
let bmw = document.getElementById("img6");
let btn6 = document.getElementById("btn6");
btn6.onclick = function (){
    if(bmw.style.display !== "none"){
        bmw.style.display = "none";
    }
    else{
        bmw.style.display = "block";
        bmw.style.transition = "0.32s";
    }
}
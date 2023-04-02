let textbox = document.getElementById("txt");
textbox.addEventListener('keydown',function(press){
    
    // 
    let element = document.getElementById("element");
    let keyc = press.key;
    element.innerHTML = keyc;
    console.log(keyc);
     let desc = document.getElementById("desc");
    let fun = document.getElementById("fun");
    if(press.key==" "){
        element.innerHTML = "Spacebar";
    }        // desc.innerHTML=" between the Alt keys and below the letter keys: C, V, B, N and M on a standard QWERTY keyboard.";

    else if(press.key=="Meta"){
        element.innerHTML= "Windows Key";
    }

   
    else if(keyc == "Tab"){
        desc.innerHTML="on the left side of the keyboard, just above the caps lock key and to the left of the Q key.";
    }
    else if(keyc == " "){
        desc.innerHTML="between the Alt keys and below the letter keys: C, V, B, N and M on a standard QWERTY keyboard.";
        fun.innerHTML = "gives spaces around the Words "
    }
    else if(keyc == "Meta"){
        desc.innerHTML= "on the lowest line of Keyboard between Function and alter key";
        fun.innerHTML  = "provide shortcuts, ny pressing the key itself will open the Windpws Start menu"
    }
    else if(keyc == "Backspace"){
        desc.innerHTML = "in the top-right portion of the keyboard.";
        fun.innerHTML  = "to moves the display cursor backwards and deletes the character at that positions and it is also called robout key.";
    }
    else if(keyc == "CapsLock"){
        desc.innerHTML="in the first column & below the tab button ";
        fun.innerHTML = "allow the user to type CAPITAL letters";
    }
    else if(keyc == "Shift"){
            desc.innerHTML="on the left and right of the keyboards, with the arrow pointing upwards, there are two shift keys";
            fun.innerHTML="activate the special character on the keys 0-9";
    }
    else if(keyc == "Alt"){
        desc.innerHTML="on the left and right side of the SpaceBar ";
        fun.innerHTML="change the function of the other pressed keys & it is generally used in combination with other. ";
}
    else if(keyc == "Control"){
        desc.innerHTML="on left snd right side & in the last row. ";
        fun.innerHTML="serve as a shortcut for various commands, it is one of the combination key.";
}
    else if(keyc == "Escape"){
        desc.innerHTML="in the most top-left corner of the keyboard & it is the first key of keyboard";
        fun.innerHTML="cancel various actions, such as interrupting a process or closing a program.";
}
    else if(keyc == "Enter"){
        desc.innerHTML="in the bottom-right corner and above the right Shift key";
        fun.innerHTML="submit the input form the user to the system.";
}
    else if(keyc == "Delete"){
        desc.innerHTML="above the numeric pad of the and on the right side of the keyboard";
         fun.innerHTML="delete any input or files from the system.";
}
    else if(keyc == "Insert"){
        desc.innerHTML="above the numeric pad of the and on the right side of the delete key";
        fun.innerHTML="insert an object at the current cursor location and switch between insert and overtype mode";
}
else{
    desc.innerHTML = "";
    fun.innerHTML = "";
}
//     if(keyc == "!"&&"1"){
//     desc.innerHTML="the top-left corner and below the F1 function key";
//     fun.innerHTML="";
// }

 });

 textbox.onclick = function(){
    textbox.style.boxShadow = "0 0 20px #a513bb";
    textbox.style.borderTopRightRadius = "20px";
    textbox.style.borderBottomLeftRadius = "20px";
 };
//  let spaceremoval = word.filter(function(){
//     return element  != "";
//  })
let blnk ="";

let display =(value)=>{
let display = document.querySelector("#dikh");
blnk =blnk+value;
display.innerHTML=blnk;
}

let soln=()=>{
    let display = document.querySelector("#dikh");
    display.innerHTML=eval(blnk);
    blnk=eval(blnk);
    blnk.toString();
}
let zeroo=()=>{
    let display = document.querySelector("#dikh");
    display.innerHTML=blnk="";
}

let last=()=>{
    blnk = blnk.slice(0,-1)
    let display = document.querySelector("#dikh");
    display.innerHTML=blnk;
}
let sq=()=>{
    let display = document.querySelector("#dikh")
    blnk=blnk*blnk;
    display.innerHTML=blnk;
}


let cube=()=>{
    let display = document.querySelector("#dikh")
    blnk=blnk*blnk*blnk;
    display.innerHTML=blnk;
}
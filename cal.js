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
    blnk=blnk.toString();
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
// let sq=()=>{
//     let display = document.querySelector("#dikh")
//     blnk=blnk*blnk;
//     display.innerHTML=blnk;
// }


// let cube=()=>{
//     let display = document.querySelector("#dikh")
//     blnk=blnk*blnk*blnk;
//     display.innerHTML=blnk;
//     blnk.toString();
// }
// let multi=()=>{
//     let display = document.querySelector("#dikh")
//     blnk=blnk*10;
//     display.innerHTML=blnk;
//     blnk.toString();
// }


// let isname=true;
// setInterval(()=>{
//     let display = document.querySelector("#vansh")
//     display.innerHTML=isname?"v.calsi":"hello "
//     isname= !isname
// },2000)
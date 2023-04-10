let box=document.getElementsByClassName('box')
console.log(box)
var ch=document.getElementById('Heading');
function change(){
ch.innerHTML="Hello World!!"
}
function replace(){
   let rt=document.getElementById('rtext');
   rt.innerHTML="Welcome to elevation academy"; 
}
///6
// function changeColor(){
//    let tag=document.getElementById('changeCol');
//    tag.style.color="red";

// }
// let tag=document.querySelector('#headi');
// tag.addEventListener('click',()=>{
//    tag.setAttribute('style','color:red');

// })

//7
function chageStyle(){
let parent= document.getElementsByClassName('parent');
parent[0].style.display='block';
}

//8

//9
//let timeZone=new Date() 
// console.log(timeZone);
// let time=document.getElementById('time');
// time.innerHTML=timeZone;
// console.log(time);
// let hours=timeZone.getHours()

// let mins=timeZone.getMinutes();

// let secs=timeZone.getSeconds();
//console.group(hours,mins,secs);
let time=document.getElementById('time');
function showTime(){
    let timeZone=new Date() 
    let hours=timeZone.getHours()
    let mins=timeZone.getMinutes();
    let secs=timeZone.getSeconds();
    console.log(hours,mins,secs);
    //strin literal
    let disTime=`HH ${hours}:MM ${mins}:SS ${secs}`
    
    time.innerHTML=disTime;

}
setInterval(()=>{
    showTime();
},1000)

//10(project);
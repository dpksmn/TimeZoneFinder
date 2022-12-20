let btn =document.getElementById("getTimezone");

btn.addEventListener("click",Timezone);


function Timezone(){
    let time=document.getElementById("showTimezone");
    time.innerHTML=Date();
}
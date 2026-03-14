window.addEventListener("scroll",reveal);

function reveal(){

var reveals=document.querySelectorAll(".reveal");

for(var i=0;i<reveals.length;i++){

var windowHeight=window.innerHeight;
var elementTop=reveals[i].getBoundingClientRect().top;
var elementVisible=150;

if(elementTop < windowHeight - elementVisible){

reveals[i].classList.add("active");

}

}

}



const counters=document.querySelectorAll(".counter");

counters.forEach(counter=>{

const update=()=>{

const target=+counter.getAttribute("data-target");
const c=+counter.innerText;

const inc=target/100;

if(c<target){

counter.innerText=Math.ceil(c+inc);

setTimeout(update,20);

}else{

counter.innerText=target;

}

};

update();

});
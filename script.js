const slides = [

"images/slide2.jpg",
"images/slide3.jpg",
"images/slide4.jpg"

];


const gallery=document.getElementById("gallery");


// thumbnails maken

slides.forEach((slide,index)=>{


let img=document.createElement("img");

img.src=slide;

img.className="thumb";


img.onclick=function(){

openSlide(index);

};


gallery.appendChild(img);


});



let current=0;


const lightbox=document.getElementById("lightbox");
const bigImage=document.getElementById("bigImage");
const counter=document.getElementById("counter");



function openSlide(index){

current=index;

update();

lightbox.style.display="flex";

}



function update(){

bigImage.src=slides[current];

counter.innerHTML=
(current+1)+" / "+slides.length;

}



document.getElementById("next").onclick=function(){

current++;

if(current>=slides.length)
current=0;

update();

}



document.getElementById("prev").onclick=function(){

current--;

if(current<0)
current=slides.length-1;

update();

}



document.getElementById("close").onclick=function(){

lightbox.style.display="none";

}



document.addEventListener("keydown",function(e){


if(e.key==="ArrowRight")
document.getElementById("next").click();


if(e.key==="ArrowLeft")
document.getElementById("prev").click();


if(e.key==="Escape")
lightbox.style.display="none";


});

const images=[];

// aantal slides aanpassen
const totalSlides=3;

for(let i=1;i<=totalSlides;i++){
    images.push(`images/Slide${i}.jpg`);
}

const gallery=document.getElementById("gallery");

images.forEach((src,index)=>{

    const img=document.createElement("img");

    img.src=src;

    img.className="thumb";

    img.onclick=()=>openLightbox(index);

    gallery.appendChild(img);

});

const lightbox=document.getElementById("lightbox");
const lightboxImg=document.getElementById("lightbox-img");
const counter=document.getElementById("counter");

let current=0;

function openLightbox(index){

    current=index;

    update();

    lightbox.style.display="flex";

}

function update(){

    lightboxImg.src=images[current];

    counter.textContent=(current+1)+" / "+images.length;

}

function next(){

    current++;

    if(current>=images.length)
        current=0;

    update();

}

function prev(){

    current--;

    if(current<0)
        current=images.length-1;

    update();

}

document.querySelector(".next").onclick=next;
document.querySelector(".prev").onclick=prev;

document.getElementById("close").onclick=()=>{

    lightbox.style.display="none";

};

document.addEventListener("keydown",e=>{

    if(lightbox.style.display!="flex") return;

    if(e.key=="ArrowRight") next();

    if(e.key=="ArrowLeft") prev();

    if(e.key=="Escape")
        lightbox.style.display="none";

});

lightbox.onclick=(e)=>{

    if(e.target===lightbox)
        lightbox.style.display="none";

};
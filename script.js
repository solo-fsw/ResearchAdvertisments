// Voeg hier je afbeeldingen toe
const slides = [
    "slides/Slide2.jpg",
    "slides/Slide3.jpg",
    "slides/Slide4.jpg",
    "slides/Slide5.jpg"
];

const gallery = document.getElementById("gallery");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

let current = 0;

// Miniaturen maken
slides.forEach((src, index) => {
    const img = document.createElement("img");
    img.src = src;
    img.loading = "lazy";

    img.onclick = () => {
        current = index;
        showImage();
        lightbox.classList.remove("hidden");
    };

    gallery.appendChild(img);
});

function showImage(){
    lightboxImg.src = slides[current];
}

document.getElementById("close").onclick = () => {
    lightbox.classList.add("hidden");
};

document.getElementById("prev").onclick = () => {
    current = (current - 1 + slides.length) % slides.length;
    showImage();
};

document.getElementById("next").onclick = () => {
    current = (current + 1) % slides.length;
    showImage();
};

// Toetsenbord
document.addEventListener("keydown",(e)=>{

    if(lightbox.classList.contains("hidden"))
        return;

    if(e.key==="ArrowRight"){
        current=(current+1)%slides.length;
        showImage();
    }

    if(e.key==="ArrowLeft"){
        current=(current-1+slides.length)%slides.length;
        showImage();
    }

    if(e.key==="Escape"){
        lightbox.classList.add("hidden");
    }

});
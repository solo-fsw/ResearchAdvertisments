const slides=[
"slides/slide2.jpg",
"slides/slide3.jpg"
];

const gallery=document.getElementById("gallery");

slides.forEach((img,i)=>{

    const a=document.createElement("a");
    a.href=`slide.html?n=${i}`;

    const image=document.createElement("img");
    image.src=img;
    image.className="thumb";

    a.appendChild(image);
    gallery.appendChild(a);

});
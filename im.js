let imges =
document.querySelectorAll(".gallery img");
let lightbox = 
document.getElementById("lightbox");
let lightboxImg =
document.getElementById("lightbox-img");
let close = document.getElementById("close");
imges.forEach((img ,index)=>{
    img.onclick=()=>{
        currentIndex= index;
        lightbox.style.display="flex";
        lightboxImg.src =img.src;
        imges[currentIndex].src;
    };
});
close.onclick=()=>{
    lightbox.style.display ="none";
};
let currentIndex = 0;
let prev =
document.getElementById("prev");
let next = 
document.getElementById("next");
next.onclick = ()=>{
    currentIndex++;
    if(currentIndex >= imges.length)
        {
        currentIndex = 0;
    }
    lightboxImg.src =
    imges[currentIndex].src;
};
prev.onclick = ()=>{
    currentIndex--;
    if(currentIndex<0){
        currentIndex = imges.length-1;
    }
    lightboxImg.src= 
    imges[currentIndex].src;
};


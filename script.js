const sliders = document.querySelectorAll('.slider');
const headers = document.querySelectorAll('.head');
const visibleDiv = document.querySelectorAll('.visibleDiv');

let counter = 0;
console.log(counter);
sliders.forEach((slider, index) => {
    slider.style.left = `${index * 100}%`;
})

//? Slider next btn
const slideNext = () => {
    if(counter > 4) return;
    counter++;
    slideImage()
}


//? Slider next btn
const slidePrev = () => {
    counter--;
    slideImage()
}

//? Moving the slider. 
function slideImage () {
    if(counter > 4) return;
    if(counter < 0) {
        counter = 3
        sliders.forEach((slider, index) => {
         slider.style.transform = `translate(-${index * 100}%)`
         })
     }
    if(counter === 4) {
        counter = 0;
        return  (
            sliders.forEach((slider, index) => {
                slider.style.transform = `translateX(${0}%)`
            })
        )
   }

   sliders.forEach((slider) => {
    slider.style.transform = `translateX(-${counter * 100}%)`
})
}



const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        //? Targeting the children of the div that has been observed.
        //? In this case. The "visibleDiv" is getting observed and the 
        //? "head" element inside the "visibleDiv" is getting targeted.
        const targetedElement = entry.target.querySelector('.head'); 
        console.log(targetedElement);
    
        if (entry.isIntersecting) {
            //? If the "visibleDiv" is in the viewport then we are
            //? Adding the "visible" class to it's children "head"
            targetedElement.classList.add('visible');
        } else {
            //? And here is vice-versa
            targetedElement.classList.remove('visible');
        }
    });
}, {threshold: 0});
//? By giving threshold : 0 we are ensuring that the class won't be 
//? Added to "head" element until the "visibleDiv" is fully on the viewport


//? In here observing each of the "visibleDiv" inside the every slide.
visibleDiv.forEach(visibleDiv => {
    observer.observe(visibleDiv)
})

console.log(headers);
setInterval(slideNext, 7000);


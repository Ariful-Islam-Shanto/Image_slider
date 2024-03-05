const sliders = document.querySelectorAll('.slider');
const headers = document.querySelectorAll('.head');

let counter = 0;
console.log(counter);
sliders.forEach((slider, index) => {
    slider.style.left = `${index * 100}%`;
})

const slideNext = () => {
    if(counter > 4) return;
    counter++;
    slideImage()
}

const slidePrev = () => {
    counter--;
    slideImage()
}

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
            // sliders.forEach((slider, index) => {
            //     slider.style.transform = `translateX(${index * 100}%)`
            // }
            // )
            sliders.forEach((slider, index) => {
                slider.style.transform = `translateX(${0}%)`
            })
        )
   }

   sliders.forEach((slider) => {
    // if(index % 2 === 0) {
    //     slider.style.transform = `translateY(${0}%)`
    // }
    slider.style.transform = `translateX(-${counter * 100}%)`
})
}



// const hides = document.querySelectorAll('.hide');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            entry.target.classList.remove('hide');
        } else {
            entry.target.classList.remove('visible');
            entry.target.classList.add('hide');
        }
    });
}, {threshold: 0});

headers.forEach(head => {
    observer.observe(head)
})

console.log(headers);
setInterval(slideNext, 7000);


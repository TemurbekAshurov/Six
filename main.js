const slaider_container = document.querySelector('.slaider-container')
const left_slider = document.querySelector('.left-slider')
const right_slider = document.querySelector('.right-slider')
const button_up = document.querySelector('.up-button')
const button_down = document.querySelector('.down-button')


const Height  = document.querySelectorAll('.right-slider div').length -1
left_slider.style.top = `-${(Height) * 100}vh`

const uzunlik = slaider_container.clientHeight

let index = 0

button_up.addEventListener('click' , () =>{
    index ++
    if(index>Height-1){
        index=0
    }
    left_slider.style.top = `-${(Height-index) * 100}vh`
    right_slider.style.transform= `translateY(-${uzunlik*index}px)`
})

button_down.addEventListener('click' , () =>{
    index --
    if(index<0){
        index=Height-1
    }
    left_slider.style.top = `-${(Height-index) * 100}vh`
    right_slider.style.transform= `translateY(-${uzunlik*index}px)`
})

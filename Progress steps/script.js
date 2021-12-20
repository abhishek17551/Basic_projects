var progressLine = document.querySelector('#progress')
var prevBtn = document.querySelector('#prev')
var nextBtn = document.querySelector('#next')
var progressCircles = document.querySelectorAll('.circle')

var currentActive = 1;

nextBtn.addEventListener('click',() => {
    currentActive++;
    //console.log(currentActive)
    if(currentActive > progressCircles.length){
        currentActive = progressCircles.length
    }
    //console.log(currentActive) -- to ensure the button click does not exceed the circles count
   update()
})

prevBtn.addEventListener('click',() => {
    currentActive--;
    //console.log(currentActive)
    if(currentActive < progressCircles.length){
        currentActive = 1;
    }
    //console.log(currentActive) -- to ensure the button click is not less than the circles count
    update()
})

function update(){
    progressCircles.forEach((circle, index) => {
        if(index < currentActive){
            circle.classList.add('active')
        }
        else{
            circle.classList.remove('active')
        }
    })
}
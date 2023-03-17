const findCountValue = document.querySelectorAll(".count");
let speed = 200;


findCountValue.forEach(number => {
    let targetCount = number.getAttribute("data-count");
    let initCount = parseInt(number.innerText);

    let speedControl = Math.floor(targetCount / speed);


    const updateNumber = () => {
        initCount = initCount + speedControl;
        number.innerText = initCount;
        if(initCount < targetCount){

            setTimeout(() => {updateNumber()}, 5)
        }

    }

    updateNumber();
})
const circleOne = document.getElementById("circle1");
const circleTwo = document.getElementById("circle2");
const defaultContent = document.getElementById("default");
const second = document.getElementById("second");

const onClickSecond = () => {
    defaultContent.style.display = 'none'
    second.style.display = 'flex'
    circleTwo.style.backgroundColor = '#585959'
    circleOne.style.backgroundColor = '#D9D9D9'
}
const onClickDefault = () => {
    defaultContent.style.display = 'flex'
    second.style.display = 'none'
    circleTwo.style.backgroundColor = '#D9D9D9'
    circleOne.style.backgroundColor = '#585959'
}

circleOne.addEventListener("click", onClickDefault);
circleTwo.addEventListener("click", onClickSecond);

const progressBar = document.querySelector(".progress-bar");
const knob = document.querySelector(".knob");
const moneyAmount = document.querySelector(".money-amount");
let pseudoElementWidth = 16;
let knobDropped = true;
let mouseEnteredKnob = false;
let storedMouseCoordinates={
    x: 0,
    y: 0,
    xPrevious: 0,
    yPrevious: 0,

}
window.addEventListener('mousemove', updateMousePosition)

knob.addEventListener('onmouseenter', mouseEntered);
knob.addEventListener('onmouseup', mouseLeftKnob);
knob.addEventListener('onmousedown', mouseIsDown);

function updateMousePosition(e)
{
    if(!knobDropped)
    {
        storedMouseCoordinates.x = e.X
        console.log(storedMouseCoordinates.x);
    }
}

function mouseIsDown()
{
    if(!knobDropped)
    {

    }
}

function mouseEntered()
{
    mouseEnteredKnob = true;
}

function mouseLeftKnob()
{
    mouseEnteredKnob = false;
}

function clampValue(value, max, min)
{
    if(value >= max) () => value = max;
    else if(value <= min) () => value = min;
}

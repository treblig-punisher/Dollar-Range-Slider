// const progressBar = document.getElementById("range-progress-bar");
const progressBar = document.querySelector(".progress-bar");
const knob = document.querySelector(".knob");
const moneyAmount = document.querySelector(".money-amount");
const button = document.querySelector(".buy-button");
let pointerReleased = true;
let knobLeft = window.getComputedStyle(knob);
let progressBarLeft = window.getComputedStyle(progressBar);
function getPositionValue()
{
    return progressBarLeft.getPropertyValue('--knob-position');
}
window.addEventListener('load', ()=>{
    
    moneyAmount.textContent = `$${(0.16*getPositionValue().replace(/[^0-9]/g,''))}.00`;
});
window.addEventListener('pointerup', ()=>{
    pointerReleased = true;
    knob.setAttribute('being-dragged', 'false');
})
progressBar.addEventListener("pointerdown", e=>{
    pointerReleased = false;
    setKnobPosition(e);
})
window.addEventListener('pointermove', e =>{
    if(!pointerReleased)
    {
        setKnobPosition(e);
        knob.setAttribute('being-dragged', 'true');
    }
})
function setKnobPosition(e)
{
    const rect = progressBar.getBoundingClientRect();
    const rectW = (rect.width);
    const knobX = knob.getBoundingClientRect();
    let positionPercent = (e.clientX - rect.left)/rectW * 100;
    knobX.left = `${positionPercent}px`;
    positionPercent = positionPercent >= 100? 100: positionPercent <= 0? 0 : positionPercent;
    moneyAmount.textContent = `$${(0.16*positionPercent).toFixed(2)}`
    progressBar.style.setProperty(
        "--knob-position",
        `${positionPercent}%`
    )
}
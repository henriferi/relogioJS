const hourHand = document.querySelector('.hour-hand')
const secondHand = document.querySelector('.second-hand')
const minuteHand = document.querySelector('.minute-hand')

const getTime = () => {
    const date = new Date();

    return {
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds(),
    };
}

setInterval(() => {

    const { seconds , minutes, hours } = getTime();

    secondHand.style.transform = `translate(0, -50%) rotate(${seconds * 6}deg)`;
    minuteHand.style.transform = `translate(0, -50%) rotate(${minutes * 6}deg)`;
    hourHand.style.transform = `translate(0, -50%) rotate(${hours * 30}deg)`;
}, 1000)

setInterval(() => {
    const { hours } = getTime();
    if(hours >=0 && hours <= 16 ) {
        document.querySelector('body').style.background = "#87ceeb";
    } else if (hours > 16 && hours <= 19) {
        document.querySelector('body').style.background = "#191970";
    } else if (hours > 19 && hours < 23) {
        document.querySelector('body').style.background = "#00001b";
    }
},0);



 
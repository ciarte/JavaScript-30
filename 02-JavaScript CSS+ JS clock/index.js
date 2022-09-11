const secondHands = document.querySelector('.seconds')
const minutesHands = document.querySelector('.minutes')
const hourHands = document.querySelector('.hour')

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
 
  const secondsDeg =((seconds/60) *360)+90;
  secondHands.style.transform = `rotate(${secondsDeg}deg)`
 

  const minutes = now.getMinutes();
  const minutesDeg =((minutes/60) *360)+90;
  minutesHands.style.transform = `rotate(${minutesDeg}deg)`

  const hour = now.getMinutes();
  const hourDeg =((hour/12) *360)+90;
  minutesHands.style.transform = `rotate(${hourDeg}deg)`

  console.log(minutesDeg)
  console.log(seconds)
}
setInterval(setDate,1000)


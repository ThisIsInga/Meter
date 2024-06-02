const meter = document.querySelector('meter')

meter.setAttribute('value', '0')

setTimeout(() => {
  meter.setAttribute('value', '30')
}, 6000);
setTimeout(() => {
  meter.setAttribute('value', '60')
}, 7000);
setTimeout(() => {
  meter.setAttribute('value', '30')
}, 8000);
setTimeout(() => {
  meter.setAttribute('value', '70')
}, 9000);
setTimeout(() => {
  meter.setAttribute('value', '60')
}, 10000);
setTimeout(() => {
  meter.setAttribute('value', '100')
}, 11000);
setTimeout(() => {
  meter.insertAdjacentHTML('afterend',"<p class='textJs'>done<p>")
}, 11000);


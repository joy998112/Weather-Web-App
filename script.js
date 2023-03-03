`use strict`
var time = new Date();

var day = time.getDay();

var hour = time.getHours();
var min = time.getMinutes();
let AMPM = "AM";

if(hour >= 12) AMPM = "PM";

if(hour > 12) hour = hour - 12;

var shour = hour.toString();
var smin = min.toString();

if(hour<10) shour = "0" + shour;
if(min<10) smin = "0" + smin;

var today= shour + ":" + smin + " " + AMPM;



switch (day) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
       day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
  }
;

  document.getElementById("day").innerHTML = day
  document.getElementById("time").innerHTML = today;

var inputval = document.querySelector('#cityinput')
var btn = document.querySelector('#add');
var city = document.querySelector('#cityname')
var descrip = document.querySelector('#description')
var temp = document.querySelector('#temperature')
var wind = document.querySelector('#wind')
apik = "3045dd712ffe6e702e3245525ac7fa38"
function convertion(val)
{
    return (val - 273).toFixed(2)
}

btn.addEventListener('click', function()
{
  fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputval.value+'&appid='+apik)
  .then(res => res.json())


  .then(data => 
  {
    var nameval = data['name']
    var descrip = data['weather']['0']['description']
    var tempature = data['main']['temp']
    var wndspd = data['wind']['speed']
    city.innerHTML=`<span>${nameval}<span>`
    temp.innerHTML = `<span>${ convertion(tempature)} C</span>`
    description.innerHTML = `<span>${descrip}<span>`
    wind.innerHTML = `<span>${wndspd} km/h<span>`

    
    
    document.getElementById('citytemp').style.visibility = "visible";
    document.getElementById("citytemp").style.visibility = "visible";

    document.getElementById('descin').style.visibility = "visible";
    document.getElementById("airin").style.visibility = "visible";

  })

  .catch(err => alert('You entered Wrong city name'))
})
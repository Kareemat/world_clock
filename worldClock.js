let locations;
$(document).ready(function(){ 
let request = new XMLHttpRequest()
  request.open('GET', 'http://worldtimeapi.org/api/timezone', true)
  request.onload = function(){
    let data = JSON.parse(this.response)
    if (request.status >= 200 && request.status < 400 && this.readyState ==4){
      locations = data
      $('#search').attr('disabled',false);
      return locations;
    }
  }
  request.send()
}); 
function searchMatchingLocations(){
  document.getElementById('match').innerHTML=""
  let insertedLocation = document.getElementById("search").value
  for (let i = 0; i < locations.length; i++){
    if ((locations[i].toLowerCase()).includes(insertedLocation.toLowerCase())){
      let sel = document.getElementById('match');
      let opt = document.createElement('option');
      opt.appendChild(document.createTextNode(locations[i]));
      sel.appendChild(opt); 
     }
  }
}
function selectLocation(){
  let selectedLocation = document.getElementById("match").value
  document.getElementById('search').value = selectedLocation
}
function empty(){
  document.getElementById('search').value =""
}
function addClock(){
 let clockZone = document.getElementById('search').value
 createClocks(clockZone)
 document.getElementById('search').value =""
}
function createClocks(place){ 
  $.ajax(('http://worldtimeapi.org/api/timezone/'+ place),
    {
      dataType: 'json',
      success: function (data, status, xhr){
      let locationTime = data.datetime.slice(11,16);
      let hour = locationTime.slice(0,2)
      let value = locationTime.slice(3,5)
      let second = data.datetime.slice(17,19)
      let zone = data.timezone.slice(7,12)
      let locationNameHolder = document.createElement("h6")
      let locationTimeHolder =document.createElement("h3")
      locationNameHolder.innerHTML =place
      locationTimeHolder.innerHTML =locationTime
      locationTimeHolder.id = zone + "Time"
      locationTimeHolder_id = locationTimeHolder.id
      let locationContent = document.createElement("div")
      locationContent.appendChild(locationNameHolder)
      locationContent.appendChild(locationTimeHolder)
      let minutes = document.createElement("div")
      let minutesBox = document.createElement("div")
      minutes.appendChild(minutesBox)
      let hours = document.createElement("div")
      let hoursBox = document.createElement("div")
      hours.appendChild(hoursBox)
      let seconds = document.createElement("div")
      let secondsCircle = document.createElement("div")
      seconds.appendChild(secondsCircle)
      let innerCircle = document.createElement("div")
      innerCircle.appendChild(seconds)
      innerCircle.appendChild(hours)
      innerCircle.appendChild(minutes)
      innerCircle.appendChild(locationContent)
      let outerCircle = document.createElement("div")
      outerCircle.appendChild(innerCircle)
      document.body.appendChild(outerCircle)
      outerCircle.className ="outerCircle"
      innerCircle.className ="innerCircle"
      secondsCircle.className ="secondsCircle"
      hoursBox.className = "hoursBox"
      minutesBox.className ="minutesBox"
      hours.className ="hours"
      minutes.className = "minutes"
      seconds.className ="seconds"
      hours.id = zone + "Hour"
      minutes.id = zone + "Minute"
      seconds.id = zone + "Second"
      let minute_id = minutes.id
      let second_id = seconds.id
      let hour_id = hours.id
      setHourAngle(hour,"#"+hours.id)
      setMinutesAndSecondsAngle(second,"#"+seconds.id)
      setMinutesAndSecondsAngle(value,"#"+minutes.id)
      function rotateHands(){
        rotateMinutesHand(minute_id,second_id)
        rotateSecondsHand(second_id)
        rotateHoursHand("#"+hours.id,locationTimeHolder_id)
        updateTime(second_id,locationTimeHolder_id)
      }
      setInterval(rotateHands,1000)
<<<<<<< HEAD
=======
      setInterval(()=>{rotateMinutesHand(zone + "Minute",second_id)},1000)
      setInterval((updateTime(second_id, zone + "Time")),1000)
>>>>>>> a61b15ebc356f9700056449bd6f09f9923127f12
      } 
    })
}
function setHourAngle(hour, id){
     if(hour == "01" || hour == "13"){
       $(id).css({'-webkit-transform' :'rotate('+120+'deg)'})
     }
     else if(hour =="02" || hour == "14"){
       $(id).css({'-webkit-transform' :'rotate('+150+'deg)'})
     }
     else if(hour =="03" || hour == "15"){
       $(id).css({'-webkit-transform' :'rotate('+180+'deg)'})
     }
     else if(hour =="04" || hour == "16"){
       $(id).css({'-webkit-transform' :'rotate('+210+'deg)'})
     }
     else if(hour =="05" || hour == "17"){
       $(id).css({'-webkit-transform' :'rotate('+240+'deg)'})
     }
     else if(hour =="06" || hour == "18"){
       $(id).css({'-webkit-transform' :'rotate('+270+'deg)'})
     }
     else if(hour =="07" || hour == "19"){
       $(id).css({'-webkit-transform' :'rotate('+300+'deg)'})
     }
     else if(hour =="08" || hour == "20"){
       $(id).css({'-webkit-transform' :'rotate('+330+'deg)'})
     }
     else if(hour =="09" || hour == "21"){
       $(id).css({'-webkit-transform' :'rotate('+360+'deg)'})
     }
     else if(hour =="10" || hour == "22"){
       $(id).css({'-webkit-transform' :'rotate('+30+'deg)'})
     }
     else if(hour =="11" || hour == "23"){
       $(id).css({'-webkit-transform' :'rotate('+60+'deg)'})
     }
     else if(hour =="12" || hour == "24"){
       $(id).css({'-webkit-transform' :'rotate('+90+'deg)'})
     }
}
function setMinutesAndSecondsAngle(value, id){
  if(value == "00"){
       $(id).css({'-webkit-transform' :'rotate('+90+'deg)'})
  }
  else if(value == "01"){
       $(id).css({'-webkit-transform' :'rotate('+96+'deg)'})
  }
  else if(value == "02"){
       $(id).css({'-webkit-transform' :'rotate('+102+'deg)'})
  }
  else if(value == "03"){
       $(id).css({'-webkit-transform' :'rotate('+108+'deg)'})
  }
  else if(value == "04"){
       $(id).css({'-webkit-transform' :'rotate('+114+'deg)'})
  }
  else if(value == "05"){
       $(id).css({'-webkit-transform' :'rotate('+120+'deg)'})
  }
  else if(value == "06"){
       $(id).css({'-webkit-transform' :'rotate('+126+'deg)'})
  }
  else if(value == "07"){
       $(id).css({'-webkit-transform' :'rotate('+132+'deg)'})
  }
  else if(value == "08"){
       $(id).css({'-webkit-transform' :'rotate('+138+'deg)'})
  }
  else if(value == "09"){
       $(id).css({'-webkit-transform' :'rotate('+144+'deg)'})
  }
  else if(value == "10"){
       $(id).css({'-webkit-transform' :'rotate('+150+'deg)'})
  }
  else if(value == "11"){
       $(id).css({'-webkit-transform' :'rotate('+156+'deg)'})
  }
  else if(value == "12"){
       $(id).css({'-webkit-transform' :'rotate('+162+'deg)'})
  }
  else if(value == "13"){
       $(id).css({'-webkit-transform' :'rotate('+168+'deg)'})
  }
  else if(value == "14"){
       $(id).css({'-webkit-transform' :'rotate('+174+'deg)'})
  }
  else if(value == "15"){
       $(id).css({'-webkit-transform' :'rotate('+180+'deg)'})
  }
  else if(value == "16"){
       $(id).css({'-webkit-transform' :'rotate('+186+'deg)'})
  }
 else if(value == "17"){
       $(id).css({'-webkit-transform' :'rotate('+-168+'deg)'})
  }
  else if(value == "18"){
       $(id).css({'-webkit-transform' :'rotate('+-162+'deg)'})
  }
  else if(value == "19"){
       $(id).css({'-webkit-transform' :'rotate('+-156+'deg)'})
  }
  else if(value == "20"){
       $(id).css({'-webkit-transform' :'rotate('+-150+'deg)'})
  }
  else if(value == "21"){
       $(id).css({'-webkit-transform' :'rotate('+-144+'deg)'})
  }
  else if(value == "22"){
       $(id).css({'-webkit-transform' :'rotate('+-138+'deg)'})
  }
  else if(value == "23"){
       $(id).css({'-webkit-transform' :'rotate('+-132+'deg)'})
  }
  else if(value == "24"){
       $(id).css({'-webkit-transform' :'rotate('+-126+'deg)'})
  }
  else if(value == "25"){
       $(id).css({'-webkit-transform' :'rotate('+-120+'deg)'})
  }
  else if(value == "26"){
       $(id).css({'-webkit-transform' :'rotate('+-114+'deg)'})
  }
  else if(value == "27"){
       $(id).css({'-webkit-transform' :'rotate('+-108+'deg)'})
  }
  else if(value == "28"){
       $(id).css({'-webkit-transform' :'rotate('+-102+'deg)'})
  }
  else if(value == "29"){
       $(id).css({'-webkit-transform' :'rotate('+-96+'deg)'})
  }
  else if(value == "30"){
       $(id).css({'-webkit-transform' :'rotate('+-90+'deg)'})
  }
  else if(value == "31"){
       $(id).css({'-webkit-transform' :'rotate('+-84+'deg)'})
  }
  else if(value == "32"){
       $(id).css({'-webkit-transform' :'rotate('+-78+'deg)'})
  }
 else if(value == "33"){
       $(id).css({'-webkit-transform' :'rotate('+-72+'deg)'})
  }
  else if(value == "34"){
       $(id).css({'-webkit-transform' :'rotate('+-66+'deg)'})
  }
  else if(value == "35"){
       $(id).css({'-webkit-transform' :'rotate('+-60+'deg)'})
  }
  else if(value == "36"){
       $(id).css({'-webkit-transform' :'rotate('+-54+'deg)'})
  }
  else if(value == "37"){
       $(id).css({'-webkit-transform' :'rotate('+-48+'deg)'})
  }
  else if(value == "38"){
       $(id).css({'-webkit-transform' :'rotate('+-42+'deg)'})
  }
  else if(value == "39"){
       $(id).css({'-webkit-transform' :'rotate('+-36+'deg)'})
  }
  else if(value == "40"){
       $(id).css({'-webkit-transform' :'rotate('+-30+'deg)'})
  }
  else if(value == "41"){
       $(id).css({'-webkit-transform' :'rotate('+-24+'deg)'})
  }
  else if(value == "42"){
       $(id).css({'-webkit-transform' :'rotate('+-18+'deg)'})
  }
  else if(value == "43"){
       $(id).css({'-webkit-transform' :'rotate('+-12+'deg)'})
  }
  else if(value == "44"){
       $(id).css({'-webkit-transform' :'rotate('+-6+'deg)'})
  }
  else if(value == "45"){
       $(id).css({'-webkit-transform' :'rotate('+0+'deg)'})
  }
  else if(value == "46"){
       $(id).css({'-webkit-transform' :'rotate('+6+'deg)'})
  }
  else if(value == "47"){
       $(id).css({'-webkit-transform' :'rotate('+12+'deg)'})
  }
  else if(value == "48"){
       $(id).css({'-webkit-transform' :'rotate('+18+'deg)'})
  }
 else if(value == "49"){
       $(id).css({'-webkit-transform' :'rotate('+24+'deg)'})
  }
  else if(value == "50"){
       $(id).css({'-webkit-transform' :'rotate('+30+'deg)'})
  }
  else if(value == "51"){
       $(id).css({'-webkit-transform' :'rotate('+36+'deg)'})
  }
  else if(value == "52"){
       $(id).css({'-webkit-transform' :'rotate('+42+'deg)'})
  }
  else if(value == "53"){
       $(id).css({'-webkit-transform' :'rotate('+48+'deg)'})
  }
  else if(value == "54"){
       $(id).css({'-webkit-transform' :'rotate('+54+'deg)'})
  }
  else if(value == "55"){
       $(id).css({'-webkit-transform' :'rotate('+60+'deg)'})
  }
  else if(value == "56"){
       $(id).css({'-webkit-transform' :'rotate('+66+'deg)'})
  }
  else if(value == "57"){
       $(id).css({'-webkit-transform' :'rotate('+72+'deg)'})
  }
  else if(value == "58"){
       $(id).css({'-webkit-transform' :'rotate('+78+'deg)'})
  }
  else if(value == "59"){
       $(id).css({'-webkit-transform' :'rotate('+84+'deg)'})
  }
}
function rotateSecondsHand(id){
   let secondsDegree = $("#"+id).css("-webkit-transform")
   let values = secondsDegree.split('(')[1].split(')')[0].split(',');
   let a = values[0];
   let b = values[1];
   let secondsAngle = Math.round(Math.atan2(b, a) * (180/Math.PI));
   secondsAngle += 6
   $("#"+id).css({
     '-webkit-transform' :'rotate('+secondsAngle+'deg)'
   })
   return secondsAngle;
}
function rotateMinutesHand(minutesID, secondsID){
   let secondsDegree = $("#"+secondsID).css("-webkit-transform")
   let values = secondsDegree.split('(')[1].split(')')[0].split(',');
   let a = values[0];
   let b = values[1];
   let secondsAngle = Math.round(Math.atan2(b, a) * (180/Math.PI));
   if (secondsAngle == 90){
     let minutesDegree = $("#"+minutesID).css("-webkit-transform")
     if(minutesDegree !== 'none'){
       let values = minutesDegree.split('(')[1].split(')')[0].split(',');
       let a = values[0];
       let b = values[1];
       let angle = Math.round(Math.atan2(b, a) * (180/Math.PI));
       angle += 6
       $("#"+minutesID).css({
       '-webkit-transform' :'rotate('+angle+'deg)'
       })
     }
   }
}
function rotateHoursHand(id,timeID){
   let locationTime = document.getElementById(timeID).innerHTML;
   let hour = locationTime.slice(0,2)
   setHourAngle(hour,id)
}
function updateTime(secondsID,timeID){
  let secondsDegree = $("#"+secondsID).css("-webkit-transform")
  let values = secondsDegree.split('(')[1].split(')')[0].split(',');
  let a = values[0];
  let b = values[1];
  let secondsAngle = Math.round(Math.atan2(b, a) * (180/Math.PI));
  if (secondsAngle == 90){
    let locationTime = document.getElementById(timeID).innerHTML;
    let minuteTime = locationTime.slice(3,5)
    let hourTime = locationTime.slice(0,2) 
    let minuteTimeInt = parseInt(minuteTime)
    let hourTimeInt = parseInt(hourTime)
    if(minuteTimeInt <= 58){
     minuteTimeInt += 1
     minuteTimeInt = appendLeadingZeroes(minuteTimeInt)
     let updatedTime = hourTime+":"+minuteTimeInt
     document.getElementById(timeID).innerHTML = updatedTime
    }
    else{
     if(hourTimeInt <=22){
      minuteTimeInt = 0
      minuteTimeInt = appendLeadingZeroes(minuteTimeInt)
      hourTimeInt += 1
      hourTimeInt = appendLeadingZeroes(hourTimeInt)
      let updatedTime = hourTimeInt+":"+ minuteTimeInt 
      document.getElementById(timeID).innerHTML = updatedTime
     }
     else{
      minuteTimeInt = 0
      minutetimeInt = appendLeadingZeroes(minuteTimeInt)
      hourTimeInt = 0
      hourTimeInt = appendLeadingZeroes(hourTimeInt)
      let updatedTime = hourTimeInt+":"+ minuteTimeInt
      document.getElementById(timeID).innerHTML = updatedTime
     }
    }
  }
}
function appendLeadingZeroes(n){ 
      if(n <= 9){
        return "0" + n;
      }
      else{
        return n;
      }
}
createClocks("Africa/Lagos")
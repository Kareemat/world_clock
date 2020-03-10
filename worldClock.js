//REQUEST FOR LAGOS TIME
function lagosData(){
  let request1 = new XMLHttpRequest()
  setInterval(request1.open('GET', 'http://worldtimeapi.org/api/timezone/Africa/Lagos', true),1000)
  request1.onload = function(){
    let data = JSON.parse(this.response)
   if (request1.status >= 200 && request1.status < 400 && this.readyState ==4){
      let datetime =data.datetime;
      let lagtime = datetime.slice(11,16);
      document.getElementById('lagosTime').innerHTML = lagtime
      let hour = lagtime.slice(0,2)
      let value = lagtime.slice(3,5)
      let second = datetime.slice(17,19)
      setHourAngle(hour, lagosHour)
      setMinutesAndSecondsAngle(value,lagosMinutes)
      setMinutesAndSecondsAngle(second, lagosSeconds)
   }
    else{
	  const errorMessage =document.createElement('marquee')
      errorMessage.textContent = `Oh No, it's not working!`
      app.appendChild(errorMessage)
    }
  }  
  request1.send()
}
//REQUEST FOR LONDON TIME
function londonData(){
  let request2 = new XMLHttpRequest()
  request2.open('GET', 'http://worldtimeapi.org/api/timezone/Europe/London', true)
  request2.onload = function(){
    let data = JSON.parse(this.response)
   if (request2.status >= 200 && request2.status < 400 && this.readyState ==4){
     let datetime =data.datetime;
     let time = datetime.slice(11,16);
     document.getElementById('lonTime').innerHTML =time
     let hour = time.slice(0,2)
     let value = time.slice(3,5)
     let second = datetime.slice(17,19)
     setHourAngle(hour, londonHour)
     setMinutesAndSecondsAngle(value,londonMinutes)
     setMinutesAndSecondsAngle(second, londonSeconds)
   }
    else{
	  const errorMessage =document.createElement('marquee')
      errorMessage.textContent = `Oh No, it's not working!`
      body.appendChild(errorMessage)
    }
  }  
  request2.send()
}
//REQUEST FOR TEXAS TIME
function texasData(){
  let request3 = new XMLHttpRequest()
  request3.open('GET', 'http://worldtimeapi.org/api/timezone/America/Chicago', true)
  request3.onload = function(){
    let data = JSON.parse(this.response)
    if (request3.status >= 200 && request3.status < 400 && this.readyState ==4){
      let datetime =data.datetime;
      let time = datetime.slice(11,16);
      document.getElementById('texTime').innerHTML = time
      let hour = time.slice(0,2)
      let value = time.slice(3,5) 
      let second = datetime.slice(17,19)
      setHourAngle(hour, texasHour)
      setMinutesAndSecondsAngle(value,texasMinutes)
      setMinutesAndSecondsAngle(second, texasSeconds)
    }
    else{
	const errorMessage =document.createElement('marquee')
    errorMessage.textContent = `Oh No, it's not working!`
    body.appendChild(errorMessage)
    }
  }  
  request3.send()
}
// REQUEST FOR PARIS TIME
function parisData(){
  let request4 = new XMLHttpRequest()
  request4.open('GET', 'http://worldtimeapi.org/api/timezone/Europe/Paris', true)
  request4.onload = function(){
    let data = JSON.parse(this.response)
   if (request4.status >= 200 && request4.status < 400 && this.readyState ==4){
      let datetime =data.datetime;
      let time = datetime.slice(11,16);
      document.getElementById('parTime').innerHTML =time
      let hour = time.slice(0,2)
      let value = time.slice(3,5)
      let second = datetime.slice(17,19)
      setHourAngle(hour, parisHour)
      setMinutesAndSecondsAngle(value,parisMinutes)
      setMinutesAndSecondsAngle(second, parisSeconds)
   }
    else{
	  const errorMessage =document.createElement('marquee')
      errorMessage.textContent = `Oh No, it's not working!`
      body.appendChild(errorMessage)
    }
  }  
  request4.send()
}
function rotateSecondsHand(){
   let secondsDegree = $(".seconds").css("-webkit-transform")
   let values = secondsDegree.split('(')[1].split(')')[0].split(',');
   let a = values[0];
   let b = values[1];
   let secondsAngle = Math.round(Math.atan2(b, a) * (180/Math.PI));
   secondsAngle += 6
   $(".seconds").css({
     '-webkit-transform' :'rotate('+secondsAngle+'deg)'
   })
   return secondsAngle;
}
function rotateMinutesHand(id){
   let secondsDegree = $(".seconds").css("-webkit-transform")
   let values = secondsDegree.split('(')[1].split(')')[0].split(',');
   let a = values[0];
   let b = values[1];
   let secondsAngle = Math.round(Math.atan2(b, a) * (180/Math.PI));
   if (secondsAngle == 90){
     let minutesDegree = $(id).css("-webkit-transform")
     if(minutesDegree !== 'none'){
       let values = minutesDegree.split('(')[1].split(')')[0].split(',');
       let a = values[0];
       let b = values[1];
       let angle = Math.round(Math.atan2(b, a) * (180/Math.PI));
       angle += 6
       $(id).css({
       '-webkit-transform' :'rotate('+angle+'deg)'
       })
     }
   }
}
function rotateHoursHand(id){
  let hoursDegree = $(id).css("-webkit-transform")
  if(hoursDegree !== 'none'){
   let values = hoursDegree.split('(')[1].split(')')[0].split(',');
   let a = values[0];
   let b = values[1];
   let angle = Math.round(Math.atan2(b, a) * (180/Math.PI));
   angle += (1/2)
   $(id).css({
     '-webkit-transform' :'rotate('+angle+'deg)'
   })
  }
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
function updateTime(id){
  let locationTime = document.getElementById(id).innerHTML;
  let minuteTime = locationTime.slice(3,5)
  let hourTime = locationTime.slice(0,2) 
  let minuteTimeInt = parseInt(minuteTime)
  let hourTimeInt = parseInt(hourTime)
    if(minuteTimeInt <= 58){
      minuteTimeInt += 1
     appendLeadingZeroes(minuteTimeInt)
     let updatedTime = hourTime+":"+ minuteTimeInt
     document.getElementById(id).innerHTML = updatedTime
    }
    else{
      minuteTimeInt = 0
      appendLeadingZeroes(minuteTimeInt)
      hourTimeInt += 1
      appendLeadingZeroes(hourTimeInt)
      let updatedTime = hourTimeInt+":"+ minuteTimeInt
      document.getElementById(id).innerHTML = updatedTime
    }
}
function updateClocks(){
     updateTime("lagosTime")
     updateTime("lonTime")
     updateTime("texTime")
     updateTime("parTime")
     rotateMinutesHand("#lagosMinutes")
     rotateMinutesHand("#londonMinutes")
     rotateMinutesHand("#texasMinutes")
     rotateMinutesHand("#parisMinutes")
     rotateHoursHand("#lagosMinutes")
     rotateHoursHand("#londonMinutes")
     rotateHoursHand("#texasMinutes")
     rotateHoursHand("#parisMinutes")
}
function appendLeadingZeroes(n){ 
      if(n <= 9){
        return "0" + n;
      }
      return n;
}
$(document).ready(function(){
	lagosData()
	londonData()
	texasData()
	parisData()
	setInterval(rotateSecondsHand,1000)
  setInterval(updateClocks,60000)
})
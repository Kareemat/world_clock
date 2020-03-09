//REQUEST FOR LAGOS TIME
function lagosData(){
  let request1 = new XMLHttpRequest()
  setInterval(request1.open('GET', 'http://worldtimeapi.org/api/timezone/Africa/Lagos', true),1000)
  request1.onload = function(){
    let data = JSON.parse(this.response)
   if (request1.status >= 200 && request1.status < 400 && this.readyState ==4){
      let datetime =data.datetime;
      let lagtime = datetime.slice(11,16);
      const h3 = document.getElementById('lagTime')
      h3.textContent = lagtime
      let lagosTime = document.getElementById('innerLagos')
      lagosTime.appendChild(h3)
      let hour = lagtime.slice(0,2)
      setHourAngle(hour, lagosHour)
      rotateHoursHand(lagosHour)
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
      const h3 = document.getElementById('lonTime')
      h3.textContent = time
      let londonTime = document.getElementById('londonText')
      londonTime.appendChild(h3)
     let hour = time.slice(0,2)
     setHourAngle(hour, londonHour)
     rotateHoursHand(londonHour)
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
      const h3 = document.getElementById('texTime')
      h3.textContent = time
      let texasTime = document.getElementById('texasText')
      texasTime.appendChild(h3)
      let hour = time.slice(0,2) 
      setHourAngle(hour, texasHour)
      rotateHoursHand(texasHour)
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
      const h3 = document.getElementById('parTime')
      h3.textContent = time
      let parisTime = document.getElementById('parisText')
      parisTime.appendChild(h3)
      let hour = time.slice(0,2)
      setHourAngle(hour, parisHour)
      rotateHoursHand(parisHour)
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
   let angle = Math.round(Math.atan2(b, a) * (180/Math.PI));
   angle += 6
   $(".seconds").css({
     '-webkit-transform' :'rotate('+angle+'deg)'
   })
}    
function rotateMinutesHand(){
   let minutesDegree = $(".minutes").css("-webkit-transform")
   let values = minutesDegree.split('(')[1].split(')')[0].split(',');
   let a = values[0];
   let b = values[1];
   let angle = Math.round(Math.atan2(b, a) * (180/Math.PI));
   angle += 6
   $(".minutes").css({
     '-webkit-transform' :'rotate('+angle+'deg)'
   })
}
function rotateHoursHand(id){
   let hoursDegree = $(id).css("-webkit-transform")
   console.log(hoursDegree)
   let values = hoursDegree.split('(')[1].split(')')[0].split(',');
   let a = values[0];
   let b = values[1];
   let angle = Math.round(Math.atan2(b, a) * (180/Math.PI));
   angle += 0.5
   $(id).css({
     '-webkit-transform' :'rotate('+angle+'deg)'
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
$(document).ready(function(){
	lagosData()
	londonData()
	texasData()
	parisData()
	setInterval(rotateSecondsHand,1000)
	setInterval(rotateMinutesHand,60000)
	setInterval(rotateHoursHand,60000)
})
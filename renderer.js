// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
require('./vendor/jquery.min.js')
var renderer

$('#countdown').on('click', () => {
  renderer = window.open('./assets/view/renderer.html', 'renderer')
	time = $('input').val()
  endHour = time[0] + time[1]
  endMinute = time[3] + time[4]
  endSecond = '00'

  now = new Date();
  nowHour = now.getHours()
  nowMinute = now.getMinutes()
  nowSecond = now.getSeconds()

  intervalHour = parseInt(endHour) - parseInt(nowHour)
  intervalMinute = parseInt(endMinute) - parseInt(nowMinute)
  intervalSecond = parseInt(endSecond) - parseInt(nowSecond)
  interval = intervalHour * 3600 + intervalMinute * 60 + intervalSecond


  flag = 1;

  let countDown
  counting = function(){
    countDown = setInterval(() => {
      countdownSecond = interval % 60
      countdownMinute = (interval % 3600 - countdownSecond) / 60
      countdownHour = (interval - countdownMinute * 60 - countdownSecond) / 3600
      if (interval >= 0) {
        text = ''
        text += countdownHour ? countdownHour + ':' : ''
        text += (countdownMinute < 10 ? (countdownHour? '0' : '') + countdownMinute : countdownMinute) + ':'
        text += countdownSecond < 10 ? '0' + countdownSecond : countdownSecond
        $(renderer.document).find('#countdown').html(text)
        if (!(interval > 0)) {
          stopCounting();
          $(renderer.document).find('#countdown').fadeOut(1000);
        }
      } 
      console.log(interval--)
    }, 1000);
  }
  stopCounting = function(){
    clearInterval(countDown)
  }
  counting();

})

$(function(){  
  $('input[type="time"][val="now"]').each(function(){    
    let d = new Date(),        
        h = d.getHours(),
        m = d.getMinutes();
    if(h < 10) h = '0' + h; 
    if(m < 10) m = '0' + m; 
    $(this).attr({
      'value': h + ':' + m
    });
  });
});
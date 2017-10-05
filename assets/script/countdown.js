// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
require('./../../vendor/jquery.min.js')
$(function(){  
  var renderer
  let countDown
  let counting = function(){

    if (interval >= 0) {
      $(renderer.document).find('#countdown').fadeIn(2000);
      countDown = setInterval(() => {
          countdownSecond = interval % 60
          countdownMinute = (interval % 3600 - countdownSecond) / 60
          countdownHour = (interval - countdownMinute * 60 - countdownSecond) / 3600
          text = ''
          text += countdownHour ? countdownHour + ':' : ''
          text += (countdownMinute < 10 ? (countdownHour? '0' : '') + countdownMinute : countdownMinute) + ':'
          text += countdownSecond < 10 ? '0' + countdownSecond : countdownSecond
          $(renderer.document).find('#countdown').html(text)
          if (!(interval > 0)) {
            stopCounting();
            $(renderer.document).find('#countdown').fadeOut(2000)
          }
        console.log(interval--)
      }, 1000);
    } 
  }
  let stopCounting = function(){
    clearInterval(countDown)
  }
  $('#stop').on('click', () => {
    stopCounting()
  })

  $('#countdown').on('click', () => {
    stopCounting()
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
    intervalHour = intervalHour < 0 ? 24 + intervalHour : intervalHour
    interval = intervalHour * 3600 + intervalMinute * 60 + intervalSecond
    counting();

  })

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
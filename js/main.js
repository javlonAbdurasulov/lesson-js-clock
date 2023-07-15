// часы
const arrH = document.querySelector('.arrH')
const arrM = document.querySelector('.arrM')
const arrS = document.querySelector('.arrS')
const numberH = document.querySelector('.numberH span')
const numberM = document.querySelector('.numberM span')
const numberS = document.querySelector('.numberS span')
function clock(){
  const time = new Date()
  const hours = time.getHours()
  const minutes = time.getMinutes()
  const seconds = time.getSeconds()
  arrS.style.transform = `rotate(${seconds * 6}deg)`;
  arrM.style.transform = `rotate(${minutes * 6}deg)`;
  arrH.style.transform = `rotate(${hours * 30 + (minutes / 2)}deg)`;
  numberH.innerHTML = hours<10 ? `0${hours}` : hours
  numberM.innerHTML = minutes<10 ? `0${minutes}` : minutes
  numberS.innerHTML = seconds<10 ? `0${seconds}` : seconds
  setTimeout(function(){
    clock()
  }, 1000)
}
clock()
// табы
const tabspanelLinks = document.querySelectorAll('.tabspanel-links a')
const tabspanelItems = document.querySelectorAll('.tabspanel-content__item')
tabspanelLinks.forEach(function(link,key){
  link.addEventListener('click', function(){
    
    tabspanelLinks.forEach(function(link1,key1){
      tabspanelLinks[key1].classList.remove('active')
      tabspanelItems[key1].classList.remove('active')
    })
    tabspanelLinks[key].classList.add('active')
    tabspanelItems[key].classList.add('active')
  })
})
// секундомер
const watchH = document.querySelector('.watchH span')
const watchM = document.querySelector('.watchM span')
const watchS = document.querySelector('.watchS span')
const watchMi = document.querySelector('.watchMi span')
const watchStartBtn = document.querySelector('.watch-start')
const watchResultBtn = document.querySelector('.watch-result')
const stopwatchResult = document.querySelector('.stopwatch-result')
const indicator = document.querySelector('.indicator')
watchResultBtn.addEventListener('click', function(){
  stopwatchResult.innerHTML += `<p>${watchH.innerHTML}:${watchM.innerHTML}:${watchS.innerHTML}:${watchMi.innerHTML}</p>`
})
watchStartBtn.addEventListener('click', function(){
  if(watchStartBtn.innerHTML == 'start'){
    watchStartBtn.innerHTML = 'stop'
    indicator.classList.add('indicator__start')
    stopwatchResult.innerHTML = ''
    stopwatch(0,0,0,0,watchStartBtn)
  }else if(watchStartBtn.innerHTML == 'stop'){
    watchStartBtn.innerHTML = 'clear'
    indicator.classList.remove('indicator__start')
    indicator.classList.add('indicator__stop')
  }else{
    watchStartBtn.innerHTML = 'start'
    indicator.classList.remove('indicator__stop')
    watchMi.innerHTML = '00'
    watchS.innerHTML = '00'
    watchM.innerHTML = '00'
    watchH.innerHTML = '00'
    stopwatchResult.innerHTML = ''
  }
})
function stopwatch(h,m,s,mi,btn){
  if(btn.innerHTML == 'stop'){
    if(mi == 99){
      mi = 0
      watchMi.innerHTML = mi<10?`0${mi}`:mi
      if(s == 59){
        s = 0
        watchS.innerHTML = s<10?`0${s}`:s
        if(m == 59){
          m = 0
          watchM.innerHTML = m<10?`0${m}`:m
          if(h == 23){
            h = 0
            watchH.innerHTML = h<10?`0${h}`:h
          }else{
            h++
            watchH.innerHTML = h<10?`0${h}`:h
          }
        }else{
          m++
          watchM.innerHTML = m<10?`0${m}`:m
        }
      }else{
        s++
        watchS.innerHTML = s<10?`0${s}`:s
      }
    }else{
      mi++
      watchMi.innerHTML = mi<10?`0${mi}`:mi
    }
    setTimeout(function(){
      stopwatch(h,m,s,mi,btn)
    }, 10.10101010)
  }
}
// таймер
const timerH = document.querySelector('.timerH input')
const timerM = document.querySelector('.timerM input')
const timerS = document.querySelector('.timerS input')
const timerMi = document.querySelector('.timerMi input')
const timerStartBtn = document.querySelector('.timer-start')
const timerClearBtn = document.querySelector('.timer-clear')


timerStartBtn.addEventListener('click', function(){
  let valueH = Number(timerH.value)
  let valueM = Number(timerM.value)
  let valueS = Number(timerS.value)
  let valueMi = Number(timerMi.value)
  if(timerStartBtn.innerHTML == 'start'){
    timerStartBtn.innerHTML = 'pause'
    timer(valueH,valueM,valueS,valueMi,timerStartBtn)
  }else{
    timerStartBtn.innerHTML = 'start'
  }
})
function timer(h,m,s,mi,btn){
  if(btn.innerHTML == 'pause'){
    timerS.value = s<10?`0${s}`:s
    timerM.value = m<10?`0${m}`:m
    timerH.value = h<10?`0${h}`:h
    if(mi == 0){
      mi = 99
      timerMi.value = mi<10?`0${mi}`:mi
      if(s == 0){
        s = 59
        timerS.value = s<10?`0${s}`:s
        if(m == 0){
          m = 59;
          timerM.value = m<10?`0${m}`:m
          if(h == 0){
            h = 99
            timerH.value = h<10?`0${h}`:h
          }else{
            h--
            timerH.value = h<10?`0${h}`:h
          }
        }else{
          m--
          timerM.value = m<10?`0${m}`:m
        }
      }else{
        s--
        timerS.value = s<10?`0${s}`:s
      }
    }else{
      mi--
      timerMi.value = mi<10?`0${mi}`:mi
    }
    if(h>0 || m>0 || s>0 || mi>0){
      setTimeout(function(){
        timer(h,m,s,mi,btn)
      }, 10.1010)
    }else{
      timerMi.value = ''
      timerS.value = ''
      timerM.value = ''
      timerH.value = ''
      btn.innerHTML = 'start'
    }
  }
}
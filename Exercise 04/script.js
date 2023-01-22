// Digital clock using JS



setInterval(function(){
    let dateObj = new Date()
    let h = dateObj.getHours()
    let m = dateObj.getMinutes()
    let s = dateObj.getSeconds()

    let time = document.getElementById('time')
    time.innerHTML = `${('0' + h).slice(-2)}:${('0' + m).slice(-2)}:${('0' + s).slice(-2)}`

}, 1000)
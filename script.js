timer = 120

let timerId = setInterval(function(){
    timer -= 1
    console.log(timer)
}, 1000)
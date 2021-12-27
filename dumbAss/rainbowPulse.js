document.querySelector("body").addEventListener(onmousemove, movePulse())

function movePulse(){
    document.querySelector("p").setAttribute("style", "color: red;")
}
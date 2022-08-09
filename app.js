function moveShrek() {
    console.log("button was clicked")
    shrek = document.getElementById("shrek")
    shrek.style.left = `${(Math.floor(Math.random()*(window.innerWidth)))-shrek.clientWidth}px`
}




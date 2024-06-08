let button = document.getElementById("btn")
// Mouse Events
button.addEventListener("dblclick", ()=>{
    document.querySelector(".box").innerHTML = "<b>Yayy you were clicked</b> Enjoy your click!"
})

button.addEventListener("contextmenu", ()=>{
    alert("Dont hack us by Right click Please")
})

// Key Events
document.addEventListener("keydown", (e)=>{
    console.log(e, e.key, e.keyCode)
})
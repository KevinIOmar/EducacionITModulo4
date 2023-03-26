//DRAG Y DROP
//dragenter - dragleave - dragover - drop

let drop = document.getElementById("drop")

drop.addEventListener("dragenter",(e)=>{
    e.preventDefault()
    console.log("Estoy adentro del drop")
})

drop.addEventListener("dragleave",(e)=>{
    e.preventDefault()
    console.log("Estoy fuera del drop")
})

drop.addEventListener("dragover",(e)=>{
    e.preventDefault()
    console.log("Estoy encima del drop")
})

drop.addEventListener("drop",(e)=>{
    e.preventDefault()
    console.log("Solte el recurso")
})

//xhr.send()

//>
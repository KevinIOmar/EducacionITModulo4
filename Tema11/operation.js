//DRAG Y DROP
//dragenter - dragleave - dragover - drop

let drop = document.getElementById("drop")
let input = document.getElementById("texto")

input.addEventListener("change",()=>{
    manejarArchivo(input.files)
})

drop.addEventListener("dragenter",(e)=>{
    e.preventDefault()

})

drop.addEventListener("dragleave",(e)=>{
    e.preventDefault()

})

drop.addEventListener("dragover",(e)=>{
    e.preventDefault()
  
})

drop.addEventListener("drop",(e)=>{
    e.preventDefault()
    //console.log(e)
    manejarArchivo(e.dataTransfer.files)
})

function manejarArchivo(archivos)
{
    //FormData
    let data = new FormData()

    for(var i = 0; i<archivos.length; i++)
    {
        data.append("imagen-"+i+"",archivos[i])
    }

    let xhr = new XMLHttpRequest

    xhr.open("POST","url")
    //xhr.setRequestHeader("content.type","?")
    xhr.send(data)
}


//xhr.send()

//>
let xhr = new XMLHttpRequest
xhr.responseType = "blob" // Nos sirve para como debe de mostrar el tipo de respuesta

xhr.open("get","17040.jpg")

xhr.addEventListener("load",()=>{
    if(xhr.status == 200)
    {
        let img_blob = xhr.response
        //URL
        let url = URL.createObjectURL(img_blob)
        //console.log(url)
        let img = document.createElement("img")
        img.src = url
        document.body.appendChild(img)
    }
})
xhr.send()
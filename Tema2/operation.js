let form = document.querySelector("form")

form.addEventListener("submit",e=>{
    e.preventDefault()
    //let valor = form[0].value
    let valor = form[0].files

    console.log(valor)
})
let btn = document.querySelector("button")

let data;
let valores;
let keys;

btn.addEventListener("click",()=>{
    data = new FormData()

    for(var i = 0 ;i<10; i++)
    {
        data.append("param-"+i+"",i);
    }
    valores = data.values()

    keys = data.keys()
})



//xhr.send()

//>
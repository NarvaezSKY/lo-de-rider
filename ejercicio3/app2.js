let miBoton=document.getElementById('miBoton')
let miDiv=document.getElementById('miDiv')

const setText=data=>{
    miDiv.textContent=data
    console.log(typeof(data))
}

const getData=()=>{
    return new Promise((resuelve, rechaza)=>{  
    setText('puedo jugar?')
    setTimeout(()=>{
        resuelve(true)
    }, 2000)
})
}

const showData=()=>{
    return new Promise ((resuelve1,rechaza)=>{
        setText('Esperando Autorizacion')
        setTimeout(() => {
            resuelve1 ({Jugador:"Rider"})
        }, 2000);
    })
}

miBoton.addEventListener('click',()=>{
    getData().then(permitido =>{
        if (permitido){
            return showData()
            } 
        }).then(user=>{
                setText(user.Jugador)
            })
        })

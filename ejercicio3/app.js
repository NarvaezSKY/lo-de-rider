let miBoton=document.getElementById('miBoton')
let miDiv=document.getElementById('miDiv')

const setText=data=>{
    miDiv.textContent=data
    console.log(typeof(data))
}

const getData=C1=>{
    setText('puedo jugar?')
    setTimeout(()=>{
        C1(confirm("sis non"))
    }, 2000)
    
    

}

const showData=C2=>{
    setText('Esperando Autorizacion')
    setTimeout(() => {
        C2 ({Jugador:"Rider"})
    }, 2000);
}

miBoton.addEventListener('click',()=>{
    getData(permitido =>{
        if (permitido){
            showData(user=>{
                setText(user.Jugador)

            
            })
        }
        else if (!permitido){
            setText("ni modo")

            
            
        }
    })
})
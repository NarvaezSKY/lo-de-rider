// funcion1()


// function funcion1(){
//     alert("que")
//     funcion2(funcion3)
// }


// function funcion2(funcion3){
//     funcion3()
// }



// function funcion3(){
//     alert('so')
// }

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

async function miNota (){
    const permitido= await getData() 
        if (permitido){
            Jugador=await showData()
        } 
        
        setText(Jugador.Jugador)
            
        }

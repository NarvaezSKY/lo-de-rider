let texto=document.getElementById('resultado')
let contenido=document.getElementById('contenido')
console.log(contenido)

const setText=data=>{


    texto.textContent=data
    console.log(typeof(data))
    console.log(data)
    texto.textContent=data
}

const getData=()=>{
    return new Promise((resuelve, rechaza)=>{  
    setText('Calcular Notas?')
    setTimeout(()=>{
        resuelve(true)
    }, 2000)
})
}

const showData=(arrayNotas)=>{
    return new Promise ((resuelve1,rechaza)=>{
        setText('Esperando Autorizacion')
        resuelve1={}
        for (let index = 0; index < arrayNotas.length; index++) {
            resuelve1[index]=arrayNotas[index]
            
        }

        setTimeout(() => {
            calcularProm(resuelve1)
        }, 2000);
    })
}

console.log("Papu cuando leas esto sabras que sos el mejor uwu att: wilma ruiz uwu");

const hacerEditables=()=>{
    return new Promise((resuelve, rechaza)=>{
        setTimeout(() => {
            resuelve(true)
            console.log('editar es true :V')
        }, 2000);
    })
}

const calcularProm=(objetoNotas)=>{
    return new Promise ((resuelve2,rechaza)=>{
        resuelve2=objetoNotas[0]+objetoNotas[1]+objetoNotas[2]
        let resuFinal=resuelve2/3
        return setText(`El promedio es: ${resuFinal}`)

    })
}

function miNota(nota1,nota2,nota3){

    let arrayNotas=[]
    arrayNotas.push(parseFloat(nota1))
    arrayNotas.push(parseFloat(nota2))
    arrayNotas.push(parseFloat(nota3))

    let divCosas=document.createElement('div')
    let divbotones=document.createElement('div')
    divCosas.classList.add('divCosas')
    arrayNotas.forEach((element)=>{
        divbotones.innerHTML=`<p><button>Eliminar</button></p>`
        let nota=document.createElement('input')
        nota.type=Number
        nota.disabled=true

     
        nota.placeholder=element
        nota.classList.add('notas')
        


        
       

        divCosas.appendChild(nota)
        
        divbotones.classList.add('divbotones')




    }
    )
   contenido.appendChild(divCosas)
   contenido.appendChild(divbotones)
    console.log(texto)

    getData().then(valor=>{
        if(valor){
            return showData(arrayNotas)
        }}).then(tal=>{
            setText(tal)
        })

        // hacerEditables(nota).then(condicion=>{
        //     if (condicion){
        //         alert('quecñoñ')
        //     }
        // })
    
}

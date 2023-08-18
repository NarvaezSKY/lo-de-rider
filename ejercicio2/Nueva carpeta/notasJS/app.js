// function miNota(nota1,nota2,nota3){

//     let arrayNotas=[]
//     arrayNotas.push(parseFloat(nota1))
//     arrayNotas.push(parseFloat(nota2))
//     arrayNotas.push(parseFloat(nota3))

//     funcion2(arrayNotas, funcion3)
    
// }

// function funcion2(arrayNotas, funcion3){

//     let suma=0
//     arrayNotas.forEach(element => {
//         suma=suma+element/3
//     });

//     console.log(suma)
//     console.log(funcion3(arrayNotas))

// }

// function funcion3(arrayNotas){
    
//     let porcentaje1=arrayNotas[0]*0.33
//     let porcentaje2=arrayNotas[1]*0.33
//     let porcentaje3=arrayNotas[2]*0.33
//     let arrayPorcentajes=[]

//     arrayPorcentajes.push(porcentaje1)
//     arrayPorcentajes.push(porcentaje2)
//     arrayPorcentajes.push(porcentaje3)
//     return arrayPorcentajes
 
// }
const boton=document.getElementById('boton')
let nota1= document.getElementById('nota1')
let nota2=document.getElementById('nota2')
let nota3=document.getElementById('nota3')






function miNota(){
    return new Promise((resuelve, rechaza)=>{

        let arrayNotas=[parseFloat(nota1.value),parseFloat(nota2.value),parseFloat(nota3.value)]

        resuelve={}
    
        for (let i = 0; i < arrayNotas.length; i++) {
            resuelve[i]=arrayNotas[i]
            
        }
        
        
    })

    
        
    

    
}

// function funcion2(){
// return new Promise((resolve, reject)=>{
//     resolve=0
//     arrayNotas.forEach(element => {
//         resolve=resolve+element/3
//     });

//     return(console.log(resolve))
// })
    

// }

// function funcion3(arrayNotas){
    
//     let porcentaje1=arrayNotas[0]*0.33
//     let porcentaje2=arrayNotas[1]*0.33
//     let porcentaje3=arrayNotas[2]*0.33
//     let arrayPorcentajes=[]

//     arrayPorcentajes.push(porcentaje1)
//     arrayPorcentajes.push(porcentaje2)
//     arrayPorcentajes.push(porcentaje3)
//     return arrayPorcentajes
 
// }


boton.addEventListener('click',()=>{
    miNota().then(tal=>{
return tal
    })
})






// console.log(objetoNotas)
// funcion2(arrayNotas).then(resuelve=>{
//         return resuelve
//     }
// )









// let notas=0
// //const definitiva=(arrayNotas)=> (arrayNotas.forEach(element => (console.log(notas=notas+element/arrayNotas.lenght))))
// const definitiva=(arrayNotas)=> (arrayNotas.forEach(element => (console.log(notas=notas+element/arrayNotas.lenght))))

// // const definitiva=()=>5


// // ()=>{}


// function definitiva(arrayNotas){

// let notas=0
// for(let i=0; i<arrayNotas.length; i++){
//   notas +=   arrayNotas[i]

// }

// let nota=0
// arrayNotas.forEach(element => {
//     nota=nota+element
// });




// // console.log(nota / arrayNotas.length)
// // return notas;

// }





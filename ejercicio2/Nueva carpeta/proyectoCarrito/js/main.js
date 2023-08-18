let icono=document.getElementById('btcarrito')
let carrito=document.getElementById('carrito')
let botonCompra=document.getElementById('comprar')
console.log(botonCompra)
let producto=document.querySelectorAll('.card')
console.log(producto)




icono.addEventListener('mouseover', ()=>{
    carrito.style.display="block"
})

icono.addEventListener('mouseleave', ()=>{
    carrito.style.display="none"
})

botonCompra.addEventListener('click',()=>{
    
})


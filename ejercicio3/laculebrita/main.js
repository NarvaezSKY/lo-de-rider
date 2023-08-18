let culebrita=document.getElementById('culebrita')
const boton=document.getElementById('boton')
let cosos=[]





boton.addEventListener('click',()=>{

let index=1
    console.log(index)
if(index=1){
        setTimeout(() => {
            console.log(index)
            culebrita.style.left="30px"
        index=2
        if(index=2){
            setTimeout(() => {
                console.log(index)
                culebrita.style.left="60px"
            index=3
            if(index=3){
                setTimeout(() => {
                    console.log(index)
                    culebrita.style.left="90px"
                    index=4
                    if(index=4){
                        setTimeout(() => {
                            console.log(index)
                            culebrita.style.left="120px"
                            index=5
                    
                        }, 300);
                    }
                }, 300);
            }
        
            }, 300);}
        }, 300);
    }

    

    
 

})



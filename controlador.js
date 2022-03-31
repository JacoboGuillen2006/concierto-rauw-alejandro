let boton=document.getElementById ("boton") 
    boton.addEventListener ("click",function(event){

        let selector=document.getElementById("selector").value
        alert("ustred eligio el"+selector)
         
        let precio=0
        let total=0
        let cantidad=document.getElementById ("cantidad").value

        switch(selector){
            case "1":
                alert("elgiste Medellin")
                precio=400000
                total=precio*cantidad
                break 
            case "2":
                alert("elgiste Bogota")
                precio=400000
                total=precio*cantidad
                break 
            case "3":
                 alert("elgiste Calí")
                 precio=400000
                total=precio*cantidad
                 break   
        }  

        alert ("el precio total es" + total)
        
        
    } )
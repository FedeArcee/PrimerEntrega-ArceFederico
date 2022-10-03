alert ("Hola! Bienvenido a mi web app!")

const bienvenida = prompt("Como es tu nombre?") 


if (bienvenida !== "") {
    alert("Perfecto, comencemos " + bienvenida + "!! :D")
} else { 
    alert("Porfavor ingresa tu nombre")
}

let tipoServicio = prompt ("Ingrese el nombre del servicio porfavor. Nosotros le diremos cuánto tiene que pagar con recargo de Vencimientos. \n- Luz\n- Gas\n- Agua")
let importeServicio = parseInt(prompt("Ingrese el monto del servicio"))

function calcularServicio(importe, servicio) {
    switch (servicio) {
        case "Luz":
            return importe
            break;

        case "Gas":
            return importe
            break;

        case "Agua":
            return importe
            break;

        default:
            return "No existe el servicio" 
            break;
    }
    
}

calcularServicio(importeServicio,tipoServicio)

let primerVencimiento = (importeServicio * 5) / 100
let segundoVencimiento = (importeServicio * 10) / 100

const resultado1 = importeServicio + primerVencimiento
const resultado2 = importeServicio + segundoVencimiento

alert ("El importe del servicio " + tipoServicio + " con el 1er Vencimiento es de: $" + resultado1 + "\n\nY con el 2do Vencimiento el importe es de: $" + resultado2 + "\n\nMuchas gracias por utilizar nuestra web app!!\n\nQue tengas un buen día!")


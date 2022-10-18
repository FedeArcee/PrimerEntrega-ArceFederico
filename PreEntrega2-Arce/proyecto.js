function ExisteAuto(auto) {
    
    let encontrado = false;
    
    for(const agencia of vehiculos){

        if(agencia.auto == auto){
            encontrado = true
        }
    }

    return encontrado
}

function ExistePrecio(precio){
    let encontrado = false;

    for(const el of vehiculos){
        
        if(el.precio <= precio){
            
            encontrado = true;
        }
    }

    return encontrado
}

const carrito = []

let nombre = prompt("Porfavor ingrese su nombre")
let auto = prompt("Hola "+ nombre +"!!!" + "\nEn nuestro humilde catálogo tenemos:\n-Gol Power\n-Fiat 600\n-Bora\n-Ferrari\n\nIngrese el que más le guste:");

const vehiculos = [
    {
        auto: "Gol Power",
        orden: 1,
        precio: 200
    },
    {
        auto: "Fiat 600",
        orden: 2,
        precio: 100
    },
    {
        auto: "Bora",
        orden: 3,
        precio: 1000
    },
    {
        auto: "Ferrari",
        orden: 4,
        precio: 5000
    },
]

while(!ExisteAuto (auto)){
    auto = prompt("La agencia no cuenta con ese modelo. Porfavor ingrese un auto de nuestra lista:\nLas opciones son:\n-Gol Power\n-Fiat 600\n-Bora\n-Ferrari")
}

const agregarAlCarrito = (auto) => {
	const producto = vehiculos.find((el) => el.auto === auto);
	carrito.push(producto);

	console.log(carrito);
};

agregarAlCarrito(auto);

const total = carrito.reduce((acc, el) => acc + el.precio,0);

let precio = parseInt(prompt("Ingrese el monto del vehiculo para confirmar la operacion $" + total))

while(!ExistePrecio(precio)){
    precio = parseInt(prompt("El monsto del vehiculo tiene que ser exacto"))
}

alert("Perfecto! Su " + auto + " llegará dentro de 48hrs hábiles")
console.log("El valor del vehiculo es de: $",total)
console.log("El cliente abona con: $",precio)
console.log("El cliente se lleva un: ",auto);
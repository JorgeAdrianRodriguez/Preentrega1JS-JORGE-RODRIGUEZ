
function iniciarApp() {
    console.log("Bienvenido a Camisetas Retro");

    // Establezco con constantes el valor de las camisetas.
    const PRECIOEQUIPO = 6590.00;
    const PRECIOSELECCION = 8900.00;
    const PRECIORETRO = 14000.00;

    // Obtengo el nombre del cliente
    let usuario = prompt("Ingrese su nombre por favor");
    console.log("el nombre del usuario es " + usuario);

    let eleccion;
    do {
        eleccion = parseInt(prompt("Hola " + usuario + " qué andás buscando hoy?(elegí el número deseado) \n1) Camisetas Clubes \n2) Camisetas Selecciones \n3) Camisetas Retro "));
        console.log(eleccion);
        if (eleccion == "1") {
            alert("Buena elección, tenemos la mejor calidad de Camisetas de todos los clubes, el valor de cada camiseta es de: $" + PRECIOEQUIPO);
        } else if (eleccion == "2") {
            alert("Genial! Tenemos gran variedad de todas las selecciones del mundo, el valor de cada camisetas es de: $" + PRECIOSELECCION);
        } else if (eleccion == "3") {
            alert("Nada mejor que una Retro, el valor de cada camiseta es de: $" + PRECIORETRO);
        } else {
            alert("Ingresá una opción válida! (1, 2 o 3)");
        }
    } while (eleccion != "1" && eleccion != "2" && eleccion != "3");

    realizarPedido(eleccion, PRECIOEQUIPO, PRECIOSELECCION, PRECIORETRO);
}

function realizarPedido(eleccion, PRECIOEQUIPO, PRECIOSELECCION, PRECIORETRO) {
    let cantidad;
    if(eleccion == "1"){
        do {
            cantidad = parseInt(prompt("Cuantas camisetas deseas agregar al carrito?"));
            if (isNaN(cantidad) || cantidad <= 0) {
                alert("Debes ingresar un número válido (usar un número mayor a 0)");
            }
        } while (isNaN(cantidad) || cantidad <= 0);
        console.log(cantidad);
        let totalPrecioEquipo = cantidad * PRECIOEQUIPO;
        console.log(totalPrecioEquipo);
        alert("El total de tu pedido es: $ " + totalPrecioEquipo);
    } else if (eleccion == "2") {
        do {
            cantidad = parseInt(prompt("Cuantas camisetas deseas agregar al carrito?"));
            if (isNaN(cantidad) || cantidad <= 0) {
                alert("Debes ingresar un número válido (usar un número mayor a 0)");
            }
        } while (isNaN(cantidad) || cantidad <= 0);
        console.log(cantidad);
        let totalPrecioSeleccion = cantidad * PRECIOSELECCION;
        console.log(totalPrecioSeleccion);
        alert("El total de tu pedido es: $ " + totalPrecioSeleccion);
    } else if(eleccion == "3") {
        do {
            cantidad = parseInt(prompt("Cuantas camisetas deseas agregar al carrito?"));
            if (isNaN(cantidad) || cantidad <= 0) {
                alert("Debes ingresar un número válido (usar un número mayor a 0)");
            }
        } while (isNaN(cantidad) || cantidad <= 0);
        console.log(cantidad);
        let totalPrecioRetro = cantidad * PRECIORETRO;
        console.log(totalPrecioRetro);
        alert("El total de tu pedido es: $ " + totalPrecioRetro);
    }
}
iniciarApp();

let domicilio = prompt ("Ingresa tu domicilio por Favor");
console.log("EL ENVIO SE REALIZARÁ A: "+domicilio);
alert ( "Tu pedido fue realizado con éxito, y lo enviaremos a " + domicilio + " esperemos lo disfrutes!");



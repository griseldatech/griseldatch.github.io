
function precioTicket() {
    console.log("Ingrese a calcular precio");

    let cantidadEntradas=document.getElementById("cantidad").value; 
    console.log("Cantidad de entradas: "+cantidadEntradas);

    let porcentaje=document.getElementById("descuento").value;
    console.log("Tiene un descuento de: "+porcentaje+"%");

    let descuentoTotal=(cantidadEntradas*200)*porcentaje/100;
    console.log("Su descuento es de: $"+descuentoTotal);

    let precio=(cantidadEntradas*200) - descuentoTotal;
    console.log("Precio a pagar: $"+precio);

    document.getElementById("totalapagar").value="Total a pagar: $"+precio;
   
}


const botonBorrar = document.getElementById('borrar');

botonBorrar.addEventListener('click', function() {
document.getElementById('nombre').value = '';
document.getElementById('apellido').value = '';
document.getElementById('correo').value = '';
document.getElementById('cantidad').value = '';
document.getElementById('descuento').selectedIndex = 0; 
document.getElementById('totalapagar').value = '';
});























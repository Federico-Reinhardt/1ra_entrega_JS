//Datos de entrada  
// 1. Nombre y Apellido del cliente.
// 2. Salario Neto del cliente.
// 2. Monto de prestamo.
// 4. En cuanto meses se pagara el prestamo.

// Procesamiento
// Acepto o rechazo del prestamo. El salario neto debe ser mayor al 25% del monto del prestamo y mayor a $100000.
// Definir la tasa de interes (35% en este caso).
// Calcular el monto total a pagar.
// calcular la cuota mensual.
// Calcular el total de intereses a pagar.
// Mensaje final


// Función para pedir los datos
function pedirDatos() {
    let Nombre_Apellido = prompt("Ingrese su nombre y apellido: ");
    let Salario_Neto = parseFloat(prompt("Ingrese su salario neto: "));
    let Monto_prestamo = parseFloat(prompt("Ingrese el monto del prestamo: "));
    let Meses_pago = parseInt(prompt("Ingrese en cuántos meses pagará el préstamo: "));
    
    return { Nombre_Apellido, Salario_Neto, Monto_prestamo, Meses_pago };
}

// Función para calcular los datos del préstamo
function calcularPrestamo({ Salario_Neto, Monto_prestamo, Meses_pago }) {
    const Interes_Anual = 0.35;
    
    if (Salario_Neto <= Monto_prestamo * 0.25 || Salario_Neto <= 100000) {
        alert("El préstamo no puede ser aceptado, el salario neto es menor a $100000.");
        throw new Error("Préstamo no aceptado.");
    }

    alert(`La tasa de interés es ${Interes_Anual * 100}%`);

    let Monto_final = Monto_prestamo * (1 + (Meses_pago / 12 * Interes_Anual));
    let Cuota_Mensual = Monto_final / Meses_pago;
    let Intereses_a_Pagar = Monto_final - Monto_prestamo;

    return { Monto_final, Cuota_Mensual, Intereses_a_Pagar };
}

// Función para mostrar los resultados
function mostrarResultados(datos, calculos) {
    alert(`El monto a devolver es $ ${calculos.Monto_final.toFixed(2)}`);
    alert(`El valor de la cuota mensual es $ ${calculos.Cuota_Mensual.toFixed(2)}`);
    alert(`El total de intereses a pagar es $ ${calculos.Intereses_a_Pagar.toFixed(2)}`);

    alert(`El préstamo fue aceptado.\n
    Solicitante: ${datos.Nombre_Apellido}\n
    Monto a devolver: $ ${calculos.Monto_final.toFixed(2)}\n
    Total de intereses: $ ${calculos.Intereses_a_Pagar.toFixed(2)}\n
    Cuota mensual: $ ${calculos.Cuota_Mensual.toFixed(2)}`);
}

// --- Programa principal ---

const datos = pedirDatos();
const calculos = calcularPrestamo(datos);
mostrarResultados(datos, calculos);

//punto 3 - operaciones con 2 numeros//

//pedir a usuario los numeros//
const numero1 = +prompt("ingrese el primer numero")
const numero2 = +prompt("ingrese el segundo numero")

//pedir que operacion realizar//
let operacion = prompt("Ingrese que operacion desea, suma, resta, multiplicar, dividir,modulo")

//mostrar operacion segun resultado"
let resultado;
switch (operacion) {
    case "suma":
        resultado = numero1 + numero2
        document.write("La suma es:" + resultado);
        break
    case "resta":
        resultado = numero1 - numero2
        document.write("La resta es:" + resultado);
        break
    case "multiplicar":
        resultado = numero1 * numero2
        document.write("La multiplicacion es:" + resultado);
        break
    case "dividir":
        if (numero2 !== 0) {
            resultado = numero1 / numero2
            document.write("La divicion es:" + resultado);
        } else {
            adocument.write("no se puede ejecutar la operacion por que el segundo numero es 0");
        }
        break
    case "modulo":
        resultado = numero1 % numero2
        document.write("La modulo es:" + resultado);
        break
    default:
        document.write("Operacion no validad");
        break
}

//punto 3 - desafico transformacion de °C a °F y °K//

//Solicitar temperatura en °C//

const temCelsius = +prompt("Ingrese la temperatura en °C");

//trasnformar la temperatura ingresada//
const temKelvin = (temCelsius + 273.15);
const temFahrenheit = ((temCelsius * 9 / 5) + 32);

document.write("La temperatura en °K es:" + temKelvin);
document.write("La temperatura en °F es:" + temFahrenheit);


//punto 5 - pedir 5 numero para  sumar y promedio de estos//

const num1 = +prompt("ingrese el primer numero");
const num2 = +prompt("ingrese el segundo numero");
const num3 = +prompt("ingrese el tercero numero");
const num4 = +prompt("ingrese el cuarto numero");
const num5 = +prompt("ingrese el quinto numero");

let sumanumeros=(num1+num2+num3+num4+num5);
let promedionumero = (sumanumeros/5);

document.write("La suma de los numeros es:" + sumanumeros);
document.write("La promedio de los numeros es:" + promedionumero);

//punto 4 - solicitar dias a usuario//

function convertir(dias){
    const ano= Math.floor(dias/365);
    const semanas= Math.floor((dias-(ano*365))/7);
    const diasrestante= Math.floor(dias-(semanas*7)-(ano*365));
   return`${ano} años, ${semanas} semanas y ${diasrestante}`;

}
const cantdias = +prompt("Ingresar cantidad de dias:");

const funcion = convertir(cantdias)
document.write("los dias equivalen a:" + funcion);
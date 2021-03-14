let paginaActual = 0;
let resultadosPorPagina = 20;
const apiKey = '89af8964112ea3350775c024cda415b8';
const url = 'https://gateway.marvel.com/v1/public';

const buscarComics = (
  paginaActual,
  resultadosPorPagina,
  coleccion = 'comics',
) => {
  fetch(
    `${url}/${coleccion}?apikey=${apiKey}&offset=${
      paginaActual * resultadosPorPagina
    }`,
  )
    .then(res => res.json())
    .then(data => {
      console.log(data);

   
      const div = document.querySelector("div")

      data.data.results.map(comic => {
        const fecha = new Date(comic.modified)

        div.innerHTML += `
        <p>Titulo: ${comic.title}<p>
        <p>Fecha: ${fecha.toLocaleDateString() === "Invalid Date" ? "No disponible" : fecha.toLocaleDateString()}</p>
        <p>Descripcion: ${comic.description || "No disponible"} </p>
        ` 
      })
    });
};

buscarComics(paginaActual, resultadosPorPagina);



// const fechaDeHoy = new Date()

// // pasando parametros: anio, mes (empieza en 0, termina en 11), dia, hora, minuto, segundo,
// const fechaEspecifica = new Date("2019", "12", "22", "02", "30", "30")
// // console.log(fechaEspecifica)

// // pasando milisegundos 
// const fechaMilisegundos = new Date(-9234567890865)
// // console.log(fechaMilisegundos)

// const fechaConFecha = new Date("2019-07-31")
// const fechaConFecha2 = new Date("December 30 2018")
// const fechaConFecha3 = new Date("01/01/1988")
// // 31 de julio de 2019 a las 00:00 en UTC 
// // 30 de julio de 2019 a las 21:00 en ART 
// console.log(fechaConFecha)
// console.log(fechaConFecha2)
// console.log(fechaConFecha3)



// const horaQueMeDaLaApiDeMarvel = "2019-11-07T16:46:15-0500"

// const fechaAPartirDeLaHoraDeMarvel = new Date(horaQueMeDaLaApiDeMarvel)

// console.log(fechaAPartirDeLaHoraDeMarvel)

// const parrafo = document.querySelector("p")

// parrafo.innerText = fechaAPartirDeLaHoraDeMarvel.toLocaleTimeString()


// const fechaDeUnaAPI = new Date(4567890987654)
// console.log(fechaDeUnaAPI)
// console.log(fechaDeUnaAPI.getDate())
// console.log(fechaDeUnaAPI.getMonth())
// console.log(fechaDeUnaAPI.getFullYear())


// Operador Ternario y operador de cortocircuito  (evaluacion de cortocircuito)
// Ternary operator // short ciruit evaluation


// cuales son los valores falsy en javascript 
//  undefined, null, false, "", 0, NaN


// // operador de negacion
// const verdadero = true
// !verdadero //false 
// const numeroCero = 0
// !numeroCero // true
// !false // true
// !NaN // true
// !"" // true
// !undefined //true 





//// si no tengo info de algun item, le tengo que avisar al usuario diciendo "info no disponible" o algo asi
// let nombre = "Caro"
// let apellido = undefined

// const div = document.querySelector("div")

// primera estrategia
// if (!nombre) {
//   nombre = "Nombre no disponible"
// }
// if (!apellido)  {
//   apellido = "Apellido no disponible"
// }

// // segunda estrategia: operador ternario
// // sintaxis: condicion ? verdadero : falso
// const mensajeDeApellido = apellido ? apellido : "Apellido no disponible" 
// const mensajeDeApellido = !apellido ? "Apellido no disponible" : apellido // son iguales!! 


// tercera estrategia: operador de circuito corto

// const esMayorDeEdad = true
// const estaEmancipado = true 

//      true       &&     false  // false 
//      true       &&     true   // true 
//      false      &&     true   // false
//      false      &&     false  // false 

// esMayorDeEdad && estaEmancipado
// si el primero es verdadero, se retorna el segundo
// si el primero es falso, se retorna el primero 


// let esMayorDeEdad = false 

// const mensajeMayorDeEdad = esMayorDeEdad && "Es mayor de edad"

// console.log(mensajeMayorDeEdad)



// const llueve = true
// const estaNublado = false 

//      true       ||     false  // true
//      true       ||     true   // true 
//      false      ||     true   // true
//      false      ||     false  // false

// // llueve || estaNublado
// // Si el primero es verdadero, se retorna el primero
// // Si el primero es falso, se retorna el segundo


// const div = document.querySelector("div")
// const nombre = "Caro"
// const edad = 22


// // esto no lo usamos en js, pero si en react:
// // div.innerHTML = `<p>${!nombre && "Nombre No disponible"}</p>`

// div.innerHTML = `<p>${nombre || "Nombre No disponible"}</p>`

// div.innerHTML = `<p>${edad > 18 ? "Es mayor a 18" : "No es mayor a 18"}</p>`
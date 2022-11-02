// Declarar una clase usuario

//usuario cuenta con :nombre string ,apellido string ,libro objecto ,mascortas string (pero que al agregar despues tengo que hacer un array?)
//el nombre y autor del objeto(libros) seria las propiedades del objeto  libros: ""  autores: ""
class User {
    constructor(nombre, apellido, mascotas=[], libros=[], ) {
        this.nombre = nombre,
        this.apellido = apellido,
        this.mascotas = mascotas,
        this.libros = libros
     //Nombre completo:
          this.getFullName = function()  {
            return console.log (`Nombre completo es:${this.nombre} ${this.apellido}}`);
          }
     }

   


addMascotas(Mascotas)
{
    this.mascotas.push(Mascotas);
    console.log(`El User tiene ${this.mascotas}`);
}


countMascotas () {
     this.mascotas.map(Mascotas);
    console.log (`El user tiene ${this.mascotas}`)

};

getBookNames () {
   this.libros.length(Libros);
   console.log (`El user tiene ${this.libros}`)
} ;

addBook(libros){
    this.libros.push({libros:[""]});
    console.log(`El user tiene ${libros}`)
   }
};



 let user1 = new User("Ramiro","Perez",["gato, perro, vaca" ], [{nombre:"Cien Años de soledad", autor:"Gabriel García Marquez"}]);
 let user2 = new User("Esteban","Ronda",["lagarto, canario" ], [{nombre:"Misión en Damasco", autor: "Kaplan, Howard"}]);


console.log(user1);
console.log(user2);
// console.log(user1.addMascotas("conejo"));
// console.log (user1.addBook("Rayuela"));
// console.log(user1.getFullName);




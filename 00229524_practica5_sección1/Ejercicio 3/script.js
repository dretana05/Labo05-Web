const estanteria = {
    libros: [{
        nombre: "El caballero oscuro",
        autor: "Frank Miller",
        leido: false
    },
    {
        nombre: "El mundo amarillo",
        autor: "Albert Espinosa",
        leido: false,
    },
    {
        nombre: "Harry Potter y el caliz de fuego",
        autor: "Albert J.K. Rowling",
        leido: true,
    },
    {
        nombre: "El ingenioso hidalgo Don Quijote de la Mancha",
        autor: "Miguel de Cervantes",
        leido: false,
    },
    {
        nombre: "Berserk",
        autor: "Kentaro Miura",
        leido: true,
    },
    {
        nombre: "Iliada",
        autor: "Homero",
        leido: false
    }],
    log() {
        const { libros } = this;
        let resultado = '';
        for (const libro of libros) {
            const prefijo = libro.leido ? 'Ya has' : 'Aun no has';
            resultado = `${resultado}
            ${prefijo} leído ${libro.nombre} de ${libro.autor}`
        }
        console.log(resultado);
    },
    sugerencia() {
        const librosNoLeidos = this.libros.filter(libro => !libro.leido);
        const indiceRandom = Math.floor(librosNoLeidos.length * Math.random());
        const elementoRandom = librosNoLeidos[indiceRandom];
        console.log(`Te sugiero ${elementoRandom.nombre} de ${elementoRandom.autor}`);
    }
}

/* La función log recorre la lista de libros y, usando un operador ternario,
decide qué mensaje mostrar según el valor de la propiedad "leido". 
Si el valor es true, se indica que el libro ya fue leído, 
y si es false, se muestra que aún no ha sido leído. De esta forma se generan 
los mensajes personalizados para cada libro. */
estanteria.log();


/* La función sugerencia obtiene únicamente los libros que no han sido leídos 
(filtrando aquellos con "leido" en false). Después selecciona uno de manera aleatoria 
usando un índice generado con Math.random() y Math.floor(). Finalmente, 
muestra un mensaje recomendando ese libro al usuario. */
estanteria.sugerencia();
estanteria.sugerencia();
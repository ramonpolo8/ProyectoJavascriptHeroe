var vida = 100;

function muestraVida(nombre) {
    console.log("Has sido ataquado con: " + nombre);
    console.log("Vida: " + vida);
}

function ataqueEnemigo(daño, nombreAtaque) {
    vida -= daño; /* vida = vida - ataque */
    muestraVida(nombreAtaque);
}

function curacionHeroe(cura, nombreCura) {
    vida += cura; /* vida = vida + pocion */
    muestraVida(nombreCura);
}
import { LEVELES } from "./levels.enum";

export class Contacto {
    nombre = '';
    apellido = '';
    email = '';
    conectado = LEVELES.CONECTADO;

    constructor(nombre, apellido, email, conectado) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.conectado = conectado;
    }
}
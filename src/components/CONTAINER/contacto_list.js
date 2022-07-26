import { LEVELES } from '../../models/levels.enum';
import { Contacto } from '../../models/contacto.class';
import React from 'react';
import ContactoComponent from './contacto';



const ContactoList = () => {

    const defaultContacto = new Contacto ('Ivo', 'Robotnik', 'ivo@gmail.com' , LEVELES.CONECTADO);
    return (
        <div>
        <div>
            Nuevo Contacto:
        </div>
        <ContactoComponent contacto={defaultContacto} />
        </div>
    );
};




export default ContactoList;

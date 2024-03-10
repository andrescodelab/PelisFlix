import React, { useState } from 'react'
import { GuardarEnStorage } from '../helpers/GuardarEnStorage';

export const Crear = ({ setListadoState }) => {

    const tituloComponente = "Añadir película";

    // Creamos un estado para las películas y poder guardar lo que nos llega del form
    const [peliState, setPeliState] = useState({
        titulo: '',
        descripcion: ''
    });

    // Descomponemos peliState para poder acceder directamente a sus parámetros en vez
    // de tener que hacer peliState.titulo que es igual a titulo
    const { titulo, descripcion } = peliState;

    const conseguirDatosForm = e => {

        // Conseguir datos del formulario
        let target = e.target;
        let titulo = target.titulo.value;
        let descripcion = target.descripcion.value;


        // Crear objeto de la película a guardar
        let peli = {
            id: new Date().getTime(),
            titulo: titulo,
            descripcion: descripcion
        };

        // Actualizar el estado
       /*  setPeliState(peli); */

        // Actualizar el estado del listado principal
        setListadoState(elementos => {
            if (Array.isArray(elementos)) {
                return [...elementos, peli]; // Agregar la nueva película al array existente
            } else {
                return [peli]; // Si elementos no es un array, crear uno nuevo con la nueva película
            }
        });

        // Actualizar el localStorage con la nueva película
        GuardarEnStorage("pelis", peli);

        // Limpiar el formulario
        setPeliState({
            titulo: '',
            descripcion: ''
        });


        /*     // Obtener las películas actuales del almacenamiento local
            let elementos = JSON.parse(localStorage.getItem("pelis")) || [];
        
            // Agregar la nueva película al array
            elementos.push(peli);
        
            // Actualizar el estado del listado principal
            setListadoState([...elementos]);
        
            // Actualizar el localStorage con las películas actualizadas
            GuardarEnStorage("pelis", elementos); */

    };


    return (
        <div className="add">
            <h3 className="title">{tituloComponente}</h3>

            {/* Si se introduce un título y una descripción, mostrar el titulo */}
            {(titulo && descripcion) && "Has creado la película: " + titulo}

            <form onSubmit={conseguirDatosForm}>
                <input type="text"
                    id="titulo"
                    name="titulo"
                    placeholder="Título" />

                <textarea
                    id="descripcion"
                    name="descripcion"
                    placeholder="Descripción"></textarea>

                <input type="submit"
                    id="save"
                    value="Guardar" />

            </form>
        </div>
    )
}

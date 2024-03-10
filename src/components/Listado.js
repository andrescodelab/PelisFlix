import React, { useEffect, useState } from "react";
import { Editar } from "./Editar";

export const Listado = ({ listadoState, setListadoState }) => {

  /*  const [ListadoState, setListadoState] = useState([]); */

  // Estado para el botón de editar
  const [editar, setEditar] = useState (0);

  useEffect(() => {
    // Obtenemos la lista de películas en el localStorage, con la CLAVE pelis
    let peliculas = JSON.parse(localStorage.getItem("pelis"));
    // Actualizamos el estado de 'listadoState'
    setListadoState(peliculas);
  }, [setListadoState]); // Cada vez que cambie setListadoState, se ejecuta la función

  // Conseguir las películas ya almacenadas en el localStorage (lo usamos para borrar)
  const conseguirPeliculas = () => {
    let peliculas = JSON.parse(localStorage.getItem("pelis"));

    setListadoState(peliculas);
    return peliculas;
  };

  // Función para borrar películas
  const borrarPeli = (id) => {
    // Conseguir las películas ya almacenadas en el localStorage
    let pelis_almacenadas = conseguirPeliculas();

    // Filtrar esas películas para eliminar del array la que no quiero
    let nuevo_array_pelis = pelis_almacenadas.filter(peli => peli.id !== parseInt(id));

    // Actualizar estado del listado (borrarla solo visualmente)
    setListadoState(nuevo_array_pelis);

    // Actualizar los datos del localStorage
    // Conseguimos el nuevo array de películas convertido, y lo metemos en la clave pelis
    localStorage.setItem('pelis', JSON.stringify(nuevo_array_pelis));
  }

  return (
    <>
      {listadoState !== null && listadoState.map(peli => {
        return (
          <article key={peli.id} className="peli-item">
            <h3 className="title">{peli.titulo}</h3>
            <p className="description">{peli.descripcion}</p>

            <button className="edit" onClick={() => setEditar(peli.id)}>Editar</button>
            <button className="delete" onClick={() => borrarPeli(peli.id)}>Borrar</button>

          {/* Formulario que aparece al clicar botón Edit */}
          {editar === peli.id && (
              // Prop para enviarle a Editar el objeto películas
              <Editar peli={peli} 
                      conseguirPeliculas={conseguirPeliculas}
                      setEditar={setEditar}
                      setListadoState={setListadoState}
              />
          )}

          </article>
        );
      })}
        {listadoState === null && <h2>No hay películas en la base de datos, añada una para comenzar</h2>}
    </>
  );
};
import React, { useState } from 'react'

export const Buscador = ({listadoState, setListadoState}) => {

    // Estado para búsqueda de películas
    const [busqueda, setBusqueda] = useState('');

    // Estado para cuando no se encuentre la película buscada
    const [noEncontrado, setNoEncontrado] = useState(false);

    const buscarPeli = (e) => {

        // Crear estado y actualizar
        setBusqueda(e.target.value);

        // Filtrar el listado para buscar coincidencias
        let pelis_encontradas = listadoState.filter(peli => {
            // Si las pelis que recorro del listado están incluidas en la búsqueda
            return peli.titulo.toLowerCase().includes(busqueda.toLowerCase());
        });

        // Comprobar si hay un resultado
        // 1 letra o ninguna: mostramos el listado general
        // 0 pelis encontradas: mostramos el listado general
        if(busqueda.length <= 1 || pelis_encontradas <= 0) {
            pelis_encontradas = JSON.parse(localStorage.getItem("pelis"));
            setNoEncontrado(true);
        }else{
            setNoEncontrado(false);
        }

        // Actualizar estado del listado principal con lo filtrado
        setListadoState(pelis_encontradas);

    }

    return (
        <div className="search">
            <h3 className="title">Buscador: {busqueda}</h3>
            {(noEncontrado === true && busqueda.length > 3) && (
            <spam className='no-encontrado' >Película no encontrada</spam>)}
            <form>
                <input  type="text"
                        id="search_field"
                        name='busqueda'
                        autoComplete='off'
                        value={busqueda}
                        onChange={buscarPeli}
                        placeholder="Buscar" />

                <button id="search">Buscar</button>
            </form>
        </div>
    )
}

import React from 'react'

export const Editar = ({ peli, conseguirPeliculas, setEditar, setListadoState }) => {

    const titulo_componente = "Editar película";

    const guardarEdicion = (e, id) => {
        e.preventDefault();

        // Conseguir el target del formulario
        let target = e.target;

        // Sacamos todas las películas almacenadas hasta el momento
        const pelis_almacenadas = conseguirPeliculas();
        // Buscar el índice del objeto de la película a actualizar
        const indice = pelis_almacenadas.findIndex(peli => peli.id === id);
        // Crear objeto con el id de ese índice, con título y descripción del formulario
        let peli_actualizada = {
            id,
            titulo: target.titulo.value,
            descripcion: target.descripcion.value
        }

        // Actualizar el elemento con ese índice
        pelis_almacenadas[indice] = peli_actualizada;

        // Guardar el nuevo array de objetos en el localStorage
        localStorage.setItem('pelis', JSON.stringify(pelis_almacenadas));

        // Actualizar el estado
        // Actualizar con el nuevo array de objetos
        setListadoState(pelis_almacenadas);
        // Actualizar para cerrar el formulario
        setEditar(0);
    }

    return (
        <div className='edit_form'>
            <h3 className='title'>{titulo_componente}</h3>
            <form onSubmit={e => guardarEdicion(e, peli.id)}>
                <input type='text'
                    name='titulo'
                    className='titulo_editado'
                    defaultValue={peli.titulo} />

                <textarea
                    name='descripcion'
                    defaultValue={peli.descripcion}
                    className='descripcion_editada' />

                <input type='submit' className='editar' value='Actualizar' />

            </form>
        </div>
    )
}

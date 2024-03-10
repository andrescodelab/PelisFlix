import { useState } from "react";
import { Buscador } from "./components/Buscador";
import { Crear } from "./components/Crear";
import { Listado } from "./components/Listado";

function App() {

    const [listadoState, setListadoState] = useState([]);

    return (
        <div className="layout">
            {/*Cabecera*/}
            <header className="header">
                <div className="logo">
                    <div className="play"></div>
                </div>
                <h1>PelisFlix</h1>
            </header>

            {/*Barra de navegación*/}
            <nav className="nav">
                <ul>
                    <li><a href="/#">Inicio</a></li>
                    <li><a href="/#">Películas</a></li>
                    <li><a href="/#">Blog</a></li>
                    <li><a href="/#">Contacto</a></li>
                </ul>
            </nav>

            {/*Contenido principal
            * Agregamos unas películas a modo de base de datos
            */}
            <section id="content" className="content">
                <Listado listadoState={listadoState} setListadoState={setListadoState} />
            </section>

            {/*Barra lateral*/}
            <aside className="lateral">
                <Buscador listadoState={listadoState} setListadoState={setListadoState} />
                <Crear setListadoState={setListadoState} />
            </aside>

            {/*Pie de página*/}
            <footer className="footer">
                <a href="/#">&copy; andrescodelab</a>
            </footer>

        </div>
    );
}

export default App;
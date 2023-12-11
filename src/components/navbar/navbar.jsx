import React from 'react'
import './navbar.css'



const Navbar = () =>{
    return(
        <header>
            {/* <nav class="navbar bg-body-tertiary">
            <div class="container-fluid">
             <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="¿Que estas buscando?" aria-label="Search"/>
             <button class="btn btn-outline-success" type="submit"><img src="./public/search.svg" alt="" /></button>
            </form>
            </div>
            </nav> */}

           <div className='BarraDeBusqueda'>
            <nav>
            <form className="Buscador" role='search'>
                <input className='inputBuscar' type="search" placeholder='¿Que estas buscando?'/>
                <button className='Buscar' type='submit'><img className="Lupa" src="./lupa.png" alt="" /></button>
            </form>
            </nav>
           </div>

            <div className='Logo'>
                <img src="/logo.png" alt="Logo Emprendimiento" />
            </div>


            <div className='Buttons'>
                <button className='Contacto'><img src="/headphones.svg" alt="Contacto" /></button>
                <button className='Carrito'><img src="/market.svg" alt="Carrito" /></button>
                <button className='IniciarSesion'><img src="/person.svg" alt="Iniciar Sesion" /></button>
            </div>
                </header>


    )
}

export { Navbar }
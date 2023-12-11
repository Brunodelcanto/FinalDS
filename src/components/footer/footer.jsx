import React from "react"
import './footer.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () =>{
    return (
        <footer>
            <div className="Info">
            <ul class="listaInfo">
            <li>
                <a class="links " href="#">Categorías</a>
            </li>
            <li>
                <a class="links" href="#">Medios de pago</a>
            </li>
            <li >
                <a class="links" href="#" >Medios de envío</a>
            </li>
            </ul>    
            </div>
            <div className="Botones">
            <button className='Correo'><img src="/contacto.png" alt="Correo" /></button>
            <button className='Instagram'><img src="/instagram.png" alt="Instagram" /></button>
            <button className='Telefono'><img src="/whatsapp.png" alt="Telefono" /></button>
            </div>
            <div className="copy">
            <p>&copy; 2023 Ché el Mate. Todos los derechos reservados.</p>
            </div>
        </footer>
        
    )
}

export {Footer}
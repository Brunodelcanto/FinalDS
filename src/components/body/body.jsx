import React from "react"
import './body.css'
import 'bootstrap/dist/css/bootstrap.min.css';
 
    const Body = () =>{
        return(
            <body>
    <div>         
      <ul className="listaMenu">
  <li className="items">
    <a className="link " href="#">Inicio</a>
  </li>
  <li className="items">
    <a className="link" href="#">Productos</a>
  </li>
  <li className="items">
    <a className="link" href="#" >Tips</a>
  </li>
  <li className="items">
    <a className="link" href="#">Contacto</a>
  </li>
   <li className="items">
    <a className="link" href="#">Sobre Nosotros</a>
  </li>
</ul>
</div> 

<div className="slider-frame">
   <ul>
    <li><img src="/portamate.jpg" alt="" /></li>
    <li><img src="/mate.jpg" alt="" /></li>
    <li><img src="/yerbera.jpg" alt="" /></li>
   </ul>
</div>

<div className="Bienvenidos">
    <h2>Bienvenidos a Che el Mate</h2>  
</div>

<div className="productos">
<div className="card">
<img src="/portamate.jpg" class="card-img-top" alt="..."/>
<div className="card-body">
    <h5 className="card-title">Kit matero</h5>
    <p clasNames="card-text"> Kit portamate, termo y bombilla, hecho en cuero negro</p>
    <a href="#" class="btn btn-primary">Comprar</a>
  </div>
  </div>
  
  <div className="card">
<img src="/mate.jpg" class="card-img-top" alt="..."/>
<div className="card-body">
    <h5 className="card-title">Mate camionero de algarrobo</h5>
    <p clasNames="card-text">Lorem ipsum dolor sit</p>
    <a href="#" class="btn btn-primary">Comprar</a>
  </div>
  </div>

  <div className="card">
<img src="/yerbera.jpg" class="card-img-top" alt="..."/>
<div className="card-body">
    <h5 className="card-title">Combo yerbera y azucarera</h5>
    <p clasNames="card-text">Lorem ipsum dolor sit</p>
    <a href="#" class="btn btn-primary">Comprar</a>
  </div>
  </div>
  </div>
  
<div className="Instagram">
<span className="nombreIg"><img src="./instagram2.png" alt="" className="ig" />che_el_mate</span>
<span className="estamos">Estamos en instagram</span>
<button className="seguinos">Seguinos</button>
</div>
</body>
        )
    }

export {Body}
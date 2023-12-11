import React from "react"
import './body.css'
import 'bootstrap/dist/css/bootstrap.min.css';
 
    const Body = () =>{
        return(
            <body>
    <div>         
      <ul class="listaMenu">
  <li class="items">
    <a class="link " href="#">Inicio</a>
  </li>
  <li class="items">
    <a class="link" href="#">Productos</a>
  </li>
  <li class="items">
    <a class="link" href="#" >Tips</a>
  </li>
  <li class="items">
    <a class="link" href="#">Contacto</a>
  </li>
   <li class="items">
    <a class="link" href="#">Sobre Nosotros</a>
  </li>
</ul>
</div> 

<div id="carouselExample" class="carousel slide">
    <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="/portamate.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="/mate.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="/yerbera.jpg" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

<div className="Bienvenidos">
    <h2>Bienvenidos a Che el Mate</h2>  
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
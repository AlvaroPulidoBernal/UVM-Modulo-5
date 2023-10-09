import _ from 'lodash';
import './estilo.css';
import Imagen from './imagen.png'
import Datos from './datos.csv'
import yaml from './datos.yaml'
import json5 from './datos.json5'
import './estilo.scss'


if('serviceWorker' in navigator){
    window.addEventListener('load', ()=>{
        navigator.serviceWorker.register('./service-worker.js').then(registration => {
            console.log("SW registrado ", registration);
        }).catch(err=>{
            console.log("SW no registrado ", err)
        })
    })
}

function componente(){
    const elemento = document.createElement('div');
    //lodash simplifica operaciones sobre strings
    elemento.innerHTML = _.join(['Hola','Webpack'],' ');
    //fondo es la clase para el estilo que viene del estilo.scss
    elemento.classList.add('fondo');
    
    const miImagen = new Image();
    miImagen.src = Imagen;
    elemento.appendChild(miImagen);

    console.log(Datos);

    return elemento;
}
console.log(yaml.name);
console.log(json5.name);

document.body.appendChild(componente());
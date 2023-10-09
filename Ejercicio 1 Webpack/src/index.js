import _ from 'lodash';
import './estilo.css';
import Imagen from './imagen.png'
import Datos from './datos.csv'
import yaml from './datos.yaml'
import json5 from './datos.json5'

function componente(){
    const elemento = document.createElement('div');
    //lodash simplifica operaciones sobre strings
    elemento.innerHTML = _.join(['Hola','Webpack'],' ');
    elemento.classList.add('hola');

    const miImagen = new Image();
    miImagen.src = Imagen;
    elemento.appendChild(miImagen);

    console.log(Datos);

    return elemento;
}

console.log(yaml.name);
console.log(json5.name);

document.body.appendChild(componente());
import './style.css'

import * as three from "three"

const scene = new three.Scene()

const camera= new three.PerspectiveCamera(75 ,window.innerWidth/window.innerHeight, 0.1 , 1000)
const renderer = new three.WebGL1Renderer()
console.log(scene);
renderer.setSize(window.innerWidth,window.innerHeight)
document.body.appendChild(renderer.domElement)
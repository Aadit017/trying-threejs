import './style.css'
import * as three from "three"
const scene = new three.Scene()
const camera= new three.PerspectiveCamera(75 ,window.innerWidth/window.innerHeight, 0.1 , 1000)
const renderer = new three.WebGLRenderer()
console.log(scene);
renderer.setSize(window.innerWidth,window.innerHeight)
renderer.setPixelRatio(devicePixelRatio)
document.body.appendChild(renderer.domElement)
const material=new three.MeshBasicMaterial({
  color:0x00FF00
})
const boxGeometry = new three.BoxGeometry(1, 1 ,1)
const mesh=new three.Mesh(boxGeometry,material)
scene.add(mesh)
camera.position.z= 5

const planeGeometry=new three.PlaneGeometry(5, 5, 10, 10)
const planeMaterial=new three.MeshPhongMaterial({
  color:0xff0000, 
  side:three.DoubleSide
})
const planeMesh=new three.Mesh(planeGeometry, planeMaterial)
scene.add(planeMesh)


const light=new three.DirectionalLight(
  0xffffff , 1)

light.position.set(0 , 0, 1)
scene.add(light)


function animate(){
  requestAnimationFrame(animate)
  renderer.render(scene , camera)
  mesh.rotation.x+=.01
  mesh.rotation.y+=.01
  // mesh.rotation.z+=.01
  planeMesh.rotation.y+=.01

}


animate()
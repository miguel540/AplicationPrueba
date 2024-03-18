import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css';
import { Edad } from './Edad';
import { INombre } from './INombre.interface';

const amigos:INombre[3]=[
  {nombre:'Luis',edad:21},
  {nombre:'Pepe',edad:15},
  {nombre:'Andrés',edad:46}
]

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <Edad></Edad>
      <ul>
      {amigos.map((x:INombre) => (
        
          <li>{x.nombre}{x.edad>=18?' es mayor de edad':' es menor de edad'} </li>
        
      ))}
      </ul>
  </React.StrictMode>,
)

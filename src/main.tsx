import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css';
//import { Edad } from './Edad';
//import { ListaAmigos } from './ListaAmigos';
import {CoctelesConsulta} from './CoctelesGin'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      {/* <Edad></Edad>
      <ListaAmigos></ListaAmigos> */}
      <CoctelesConsulta/>

  </React.StrictMode>,
)

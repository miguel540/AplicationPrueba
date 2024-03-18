import { INombre } from '../interfaces/INombre.interface';

const amigos:INombre[3]=[
    {nombre:'Luis',edad:21},
    {nombre:'Pepe',edad:15},
    {nombre:'Andrés',edad:46}
  ]

export const ListaAmigos = (): JSX.Element => {
 
    return (
      <>
      <div>
         <ul>
            {amigos.map((x:INombre,indice:number) => (
            <li key={indice}>{x.nombre}{x.edad>=18?' es mayor de edad':' es menor de edad'} </li> ))}
        </ul>
      </div>
      </>
    );
  };
  
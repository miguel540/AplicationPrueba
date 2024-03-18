import { useEffect, useState } from 'react';
import { ICoctel, IDrink } from '../interfaces/coctel.interface';
import { CardCoctel } from '../src/CardCoctel';


export const CoctelesConsulta = () => {
  const [coctelesDeGinebra, setCoctelesDeGinebra] = useState<IDrink[]>([]);
  const [status, setStatus] = useState<number>(0); 
  const [errorFetch, setErrorFetch] = useState<boolean>(false); 
  
  const fetchCocteles = async (): Promise<void> => {
    try {
      const data = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin`);
      const json: ICoctel = await data.json();
      setStatus(data.status);
      setCoctelesDeGinebra(json.drinks);
      console.log(json);
      setErrorFetch(false);
    } catch (e) {
      setErrorFetch(true);
    }
  };

  useEffect(() => {
    fetchCocteles();
  }, []);

 
  return (
    <>
      <h1>Cocteles de ginebra</h1>
      <hr />

      {/* Si errorFetch es true, mostramos un mensaje de error al usuario */}
      {errorFetch && (
        <div className="alert alert-danger" role="alert">
          No se ha podido establecer la conexión con el recurso solicitado
        </div>
      )}
      {/* Si el status devuelto es un 200, es que sí se han encontrado los datos */}
      {status === 200 && (
          <div className="row">
            {/* Iteramos los paises y por cada uno sacamos un card */}
            {coctelesDeGinebra?.map((x) => (
                <CardCoctel strDrink={x.strDrink} strDrinkThumb={x.strDrinkThumb}  key={x.idDrink}></CardCoctel>
                ))}
          </div>
      )}
    </>
  );
};

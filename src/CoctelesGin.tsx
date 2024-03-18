import { ChangeEvent,useEffect, useState } from 'react';
import { ICoctel, IDrink } from '../interfaces/coctel.interface';
import { CardCoctel } from '../src/CardCoctel';


export const CoctelesConsulta = () => {
  const [coctelesDeGinebra, setCoctelesDeGinebra] = useState<IDrink[]>([]);
  const [ingrediente, setIngrediente] = useState<string>('Gin');
  const [status, setStatus] = useState<number>(0);
  const [errorFetch, setErrorFetch] = useState<boolean>(false);
  
  const onInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => { //en vez de pasar e con todos sus valores, le pasas el campo que te interesa 'target'
    const { value } = target;
    setCoctelesDeGinebra([]); //vacias el contenido
    setIngrediente(value);
  };

  const fetchCocteles = async (): Promise<void> => {
    try {
      const data = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingrediente}`);
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
  }, [ingrediente]);

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
          <form>
            <div className="form-group">
              <label htmlFor="ingrediente">Ingrediente</label>
              <input className="form-control" id="ingrediente" type="text" value={ingrediente} onChange={onInputChange} />
            </div>
          </form>

          {coctelesDeGinebra?.map((x) => (
            <CardCoctel strDrink={x.strDrink} strDrinkThumb={x.strDrinkThumb} key={x.idDrink}></CardCoctel>
          ))}
        </div>
      )}
    </>
  );
};

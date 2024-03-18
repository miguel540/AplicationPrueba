import {IDrink} from '../interfaces/coctel.interface';



export const CardCoctel = ({strDrink,strDrinkThumb,idDrink}:IDrink): JSX.Element => {
    return (
        <>
            <div className="card" style={{width: '18rem'}}>
                <img src={strDrinkThumb} className="card-img-top" alt={idDrink}/>
                    <div className="card-body">
                        <p className="card-text">{strDrink}</p>
                    </div>
            </div>

        </>
    );
};

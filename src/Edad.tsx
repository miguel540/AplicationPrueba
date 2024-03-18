import { useState } from "react";

export const Edad = (): JSX.Element => {
  const [inputEdad, setInputEdad] = useState(0);
    return (
      <>
        <h1>Actividad 3</h1>
        <div className="mb-3">
            <label htmlFor="inputEdad" className="form-label">Edad</label>
            <input type="text" className="form-control" id="inputEdad" placeholder={inputEdad.toString()}  onChange={(e) => setInputEdad(Number(e.target.value))}/>
            <span>{inputEdad>=18?'Es mayor de edad':'Es menor de edad'}</span>
        </div>
      </>
    );
  };
  
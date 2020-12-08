import React, {Fragment, useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [resultado, guardarResultado] = useState({});


  useEffect( () => {
    const consultarApi = async () =>{
      
      const url = 'https://datos.cdmx.gob.mx/explore/embed/dataset/carpetas-de-investigacion-pgj-de-la-ciudad-de-mexico/map/?disjunctive.ao_hechos&disjunctive.delito&location=10,19.40184,-98.9669&static=false&datasetcard=false&scrollWheelZoom=false" width="400" height="300" frameborder="0"'
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();
      // console.log(resultado);

      guardarResultado(resultado);
    }
    consultarApi();
}, [])

  return (
    <Fragment>
      <h1 className='text-center'>Datos CDMX</h1>

      <iframe>
          
      </iframe>
    </Fragment>
  );
}

export default App;

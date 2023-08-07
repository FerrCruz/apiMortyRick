import React, {useEffect, useState} from 'react'
import Navbar from './componentes/BotonesClientes'
import Personajes from './componentes/Personajes'
import Paginacion from './componentes/pagination'

function App() {

  const [personajes, setPersonajes] = useState([]);
  const[info, setInfo] = useState({})

  const urlInicial ="https://rickandmortyapi.com/api/character";

  const fetchClientes = (url) => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setPersonajes(data.results);
        setInfo(data.info)
      }) 
      .catch(error => console.log(error))
  }

  const onPrevious = () => {
    
    fetchClientes(info.prev)
    
  }

  const onNext = () => {
    fetchClientes("https://rickandmortyapi.com/api/character")
  }

  useEffect(() => {
    fetchClientes(urlInicial);
  },[])

  return (
    <>
      <Navbar brand="Cuenta a consultar"/>
      <div className='container mt-5'></div>
        <Paginacion 
        prev={info.prev} 
        next={info.next} 
        onPrevious={onPrevious} 
        onNext={onNext}>
        </Paginacion>
        <Personajes personajes={personajes}/>
        <Paginacion
        prev={info.prev} 
        next={info.next} 
        onPrevious={onPrevious} 
        onNext={onNext}
        ></Paginacion>
    </>
    

  );
}

export default App;

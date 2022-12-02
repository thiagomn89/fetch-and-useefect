import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import {Card} from './components/Card';
import rick from './img/rickimg.png';



function App() {
  const [data, setData] = useState("");
  const [page, setPage] = useState(1);
  console.log(data);

useEffect(() => {
  fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
    .then((response) => response.json())
    .then((response) => setData(response));
}, [page]);

  function handlePrev(){
    setPage(page -1)

  }

  function handleNext(){
    setPage(page +1)

  }
  
    return (
      data ? (
        <>
        <main className='containerMain'>
          <div className='containerTitulo'>
            <div className='containerImg'>
              <img src={rick}/>
            </div>
    
          <button onClick={handlePrev}>Prev</button>
            <button onClick={handleNext}>Next</button>
            </div>
         
        
          <div className="App">

           
        
          {data.results.map((element) => (
            <Card key={element.name} element=
            {element}/>
                    
          ))}
           </div>
           </main>
        
        </>
      ) : null
  
  );
}

export default App;

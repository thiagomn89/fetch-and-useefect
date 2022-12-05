 import './style.css';
 
 export function Card({ element }) {
    //console.log(element);
    return (
        <div className="containerCard">
            <p>{element.name}</p><br></br>
            <img src={element.image}/><br />
            <p>Especie: {element.species}</p>
            <p>Sexo: {element.gender}</p>
            <p>Origin: {element.origin.name}</p>
            <p>Status: {element.status}</p><br />
            <hr />
        </div>
        

    );
}
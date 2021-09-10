import React, {useState} from 'react';


const Pokemon = () => {

    const [allPokemon, setAllPokemon] = useState([]);

    
    const clickHandler = () => { 
        console.log("onClick function triggered")
        fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=807')
            .then(response =>response.json())
            .then(response =>setAllPokemon(response.results ))
        let pokemons = [...allPokemon]
        setAllPokemon(pokemons)
        }

    
    return (
        <div className="container mx-auto mt-5">
            <button onClick={(e)=>{clickHandler(e)
            }} 
            className ="btn btn-secondary btn-lg mb-3"
            >View A List of Pokeman
            </button>
            {   
                allPokemon.length > 0 && allPokemon.map((pokemon, idx)=>{
                    return <div key = {idx} >
                                <p lassName="card-text">{pokemon.name}</p>
                            </div>
                    })
            }
            
        </div>
    );
};



export default Pokemon;
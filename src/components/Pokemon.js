import React, {useState} from 'react';
import axios from 'axios';


const Pokemon = () => {

    const [allPokemon, setAllPokemon] = useState([]);

    
    const clickHandler = () => { 
        console.log("onClick function triggered")
        axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=807')
            .then(response=>{ 
            console.log("the response looks like this:", response)
            setAllPokemon(response.data.results)
        })
            .catch(err=>{
            console.log(err)
            })  
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
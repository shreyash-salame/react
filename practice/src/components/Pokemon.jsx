import axios from "axios";
import { useEffect, useState } from "react";

function Pokemon() {
    const [pokemons, setPokemons] = useState([]);
    const [selectedPokemon, setSelectedPokemon] = useState(null);

    useEffect(() => {
        axios
            .get("https://pokeapi.co/api/v2/pokemon")
            .then(res => {
                let pokemons = res.data.results;
                setPokemons(pokemons);
            });
    }, []);

    const handlePokemonClick = (pokemon) => {
        axios
            .get(pokemon.url)
            .then(res => {
                setSelectedPokemon(res.data);
            });
    };

    return (
        <>
            <ul className="container">
                <div>
                    {
                        pokemons.map(pokemon => (
                            <div 
                                key={pokemon.name} 
                                className="pokemon" 
                                onClick={() => handlePokemonClick(pokemon)}
                            >
                                {pokemon.name}
                            </div>
                        ))
                    }
                </div>
                <div className="right-side">
                    <h2>{selectedPokemon.name}</h2>
                    
                    {selectedPokemon && (
                        
                        <img 
                            src={selectedPokemon.sprites.front_default} 
                            alt={selectedPokemon.name} 
                        /> 
                       
                    )}
                </div>
            </ul>
        </>
    );
}

export default Pokemon;

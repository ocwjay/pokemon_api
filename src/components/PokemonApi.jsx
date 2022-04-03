import React, {useEffect, useState} from 'react'

const PokemonApi = (props) => {
    const [pokemonList, setPokemonList] = useState([]);

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/?limit=811')
            .then(response => response.json())
            .then(response => setPokemonList(response.results))
    }, []);

    return (
        <ul>
            {pokemonList.length > 0 && pokemonList.map((pokemon, index)=>{
                return (<li key={index} style={{textTransform: 'capitalize'}}>{pokemon.name}</li>)
            })}
        </ul>
    );
}
export default PokemonApi;
import './App.css'
import {useEffect, useState} from "react";
import {getAllPokemon, getPokemon} from "./utils/pokemon.js";

function App() {
    const initialURL = "https://pokeapi.co/api/v2/pokemon/";

    const [loading, setLoading] = useState(false);

    const [pokemonData, setPokemonData] = useState([]);

    useEffect(() => {
        const fetchPokemonData = async () => {
            //すべてのポケモンデータの取得
            let res = await getAllPokemon(initialURL);
            //各ポケモンの詳細なデータを取得
            // console.log("res")
            // console.log(res);
            loadPokemon(res.results);
            // console.log(res.results);
            // console.log(res.results);
            setLoading(false);
        }
        fetchPokemonData();
    }, []);

    const  loadPokemon = async (data) => {
        let _pokemonData = await Promise.all(
            data.map((pokemon) => {
                // console.log(pokemon);
                let pokemonRecord = getPokemon(pokemon.url);
                return pokemonRecord;
            })
        )
        setPokemonData(_pokemonData);
    };

    console.log(pokemonData);



  return (
    <>
      <div className="App">
          {loading ? (<h1>ロード中.........</h1>) : (<h1>ポケモンデータを取得しました</h1>)}
      </div>
    </>
  )
}

export default App

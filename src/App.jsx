import './App.css'
import {useEffect} from "react";
import {getAllPokemon} from "./utils/pokemon.js";

function App() {
  const initialURL = "https://pokeapi.co/api/v2/pokemon/";

    useEffect(() => {
        const fetchPokemonData = async () => {
            //すべてのポケモンデータの取得
            let res = await getAllPokemon(initialURL);
            console.log(res);
        }
        fetchPokemonData();
    }, []);


  return (
    <>
      <p>テスト</p>
    </>
  )
}

export default App

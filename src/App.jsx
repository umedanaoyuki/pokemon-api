import './App.css'
import {useEffect, useState} from "react";
import {getAllPokemon} from "./utils/pokemon.js";

function App() {
    const initialURL = "https://pokeapi.co/api/v2/pokemon/";
    
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchPokemonData = async () => {
            //すべてのポケモンデータの取得
            let res = await getAllPokemon(initialURL);
            console.log(res);
            setLoading(false);
        }
        fetchPokemonData();
    }, []);


  return (
    <>
      <div className="App">
          {loading ? (<h1>ロード中.........</h1>) : (<h1>ポケモンデータを取得しました</h1>)}
      </div>
    </>
  )
}

export default App

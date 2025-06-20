import './App.css';
import useCustomHook from './hooks/useCustomHook';
import CharacterCard from './components/CharacterCard';

function App() {
  const urlPokemon = 'https://pokeapi.co/api/v2/pokemon/1';
  const urlRick = 'https://rickandmortyapi.com/api/character/1';

  const {
    data: dataPokemon,
    loading: loadingPokemon,
    error: errorPokemon
  } = useCustomHook(urlPokemon);

  const {
    data: dataRick,
    loading: loadingRick,
    error: errorRick
  } = useCustomHook(urlRick);

  return (
    <>
      {loadingPokemon && <p>Cargando Pokémon...</p>}
      {errorPokemon && <p>Error: {errorPokemon}</p>}
      {dataPokemon && (
        <CharacterCard
          name={dataPokemon.name}
          image={dataPokemon.sprites.front_default}
          source="Pokémon"
        />
      )}

      {loadingRick && <p>Cargando Rick and Morty...</p>}
      {errorRick && <p>Error: {errorRick}</p>}
      {dataRick && (
        <CharacterCard
          name={dataRick.name}
          image={dataRick.image}
          source="Rick and Morty"
        />
      )}
    </>
  );
}

export default App;
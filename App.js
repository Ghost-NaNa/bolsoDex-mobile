import { Cabecalho } from './assets/componentes/cabecalho/cabecalho.js';
import PokemonCard from './assets/componentes/cardsPokemons/pokemon.js';
import Pesquisa from './assets/componentes/pesquisa/pesquisa.js';
import { FlatList, SafeAreaView, Text } from 'react-native-web';
import { useState, useEffect } from 'react';

export default function App() {

  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    async function buscarPokemons() {
      const listaPokemons = [];
      for (let i = 1; i < 10; i++) {
        const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`);
        const dados = await resposta.json();
        listaPokemons.push(dados);
      }
      setPokemons(listaPokemons);
    }
    buscarPokemons();
  }, []);

  console.log(pokemons)
  return (

    <SafeAreaView style={{ flex: 1, alignItems: 'center', backgroundColor: '#e5e5e5' }}>
      <Cabecalho></Cabecalho>

      <Pesquisa></Pesquisa>

      <FlatList
        data={pokemons}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => <PokemonCard pokemonId={item.id} pokemonName={item.name} sprite={item.sprites.other["official-artwork"].front_default} />}
        numColumns={3}
      />
    </SafeAreaView>
  );
}
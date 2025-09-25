import { Cabecalho } from './assets/componentes/cabecalho/cabecalho.js';
import PokemonCard from './assets/componentes/cardsPokemons/pokemon.js';
import Pesquisa from './assets/componentes/pesquisa/pesquisa.js';
// Importe o ActivityIndicator para mostrar um feedback de carregamento
import { FlatList, SafeAreaView, ActivityIndicator, View } from 'react-native-web';
import { useState, useEffect, useCallback } from 'react';

// URL inicial da API com um limite de 20 Pokémon por vez
const API_URL = 'https://pokeapi.co/api/v2/pokemon?limit=20';

export default function App() {

  const [pokemons, setPokemons] = useState([]);
  const [nextUrl, setNextUrl] = useState(API_URL);
  const [loading, setLoading] = useState(false);

  console.log(pokemons);

  // código extremamente complicado de explicar
  const fetchPokemonDetails = async (results) => {
    const pokemonDetails = await Promise.all(
      results.map(async (pokemon) => {
        const response = await fetch(pokemon.url);
        return response.json();
      })
    );
    return pokemonDetails;
  };

  // carregar mais Pokémon
  const loadMorePokemons = useCallback(async () => {
    if (loading || !nextUrl) return;

    setLoading(true);
    try {
      const response = await fetch(nextUrl);
      const data = await response.json();
      const newPokemonDetails = await fetchPokemonDetails(data.results);

      setPokemons(prevPokemons => [...prevPokemons, ...newPokemonDetails]);
      
      setNextUrl(data.next);
    } catch (error) {
      console.error("Erro ao buscar Pokémon:", error);
    } finally {
      setLoading(false);
    }
  }, [loading, nextUrl]);
  useEffect(() => {
    loadMorePokemons();
  }, []);

  // Componente para renderizar o carregamento 
  const renderFooter = () => {
    if (!loading) return null;
    return (
      <View style={{ paddingVertical: 20 }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', backgroundColor: '#e5e5e5' }}>
      <Cabecalho />
      <Pesquisa />

      <FlatList
        data={pokemons}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <PokemonCard 
            pokemonId={item.id} 
            pokemonName={item.name} 
            sprite={item.sprites.other["official-artwork"].front_default} 
            pokemonTipo1={item.types[0].type.name} 
            pokemonTipo2={item.types[1] ? item.types[1].type.name : null}
          />
        )}
        onEndReached={loadMorePokemons}
        onEndReachedThreshold={0.5}
        ListFooterComponent={renderFooter}
      />
    </SafeAreaView>
  );
}
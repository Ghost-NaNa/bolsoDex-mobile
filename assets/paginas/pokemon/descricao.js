
import { FlatList, SafeAreaView, ActivityIndicator, View, Text, Image } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useState, useEffect } from 'react';

export function Descricao() {

    const route = useRoute();
    const [pokemon, setPokemon] = useState({});
    const [descricao, setDescricao] = useState('');

    const API_URL = `https://pokeapi.co/api/v2/pokemon/${route.params.pokemonId}/`

    useEffect(() => {
        async function buscarPokemon() {
            const response = await fetch(API_URL)
            const data = await response.json()
            setPokemon(data)
        }
        async function buscarDescricao() {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${route.params.pokemonId}/`)
            const data = await response.json();
            const entry = data.flavor_text_entries.find(
                (entry) => entry.language.name === 'en'
            );
            setDescricao(entry ? entry.flavor_text.replace(/\f|\n|\r/g, ' ') : 'Descrição não encontrada')
        }
        buscarPokemon();
        buscarDescricao();
    }, []);
    return (
        <SafeAreaView>
            <View>
                {pokemon.sprites ? (
                    <Image source={{uri: pokemon.sprites.other["official-artwork"].front_default}} />
                ) : (
                    <ActivityIndicator size="large" color="#0000ff" />
                )}
                <View>
                    <Text>{route.params.pokemonId}</Text>
                    <Text>{pokemon.name}</Text>
                </View>
            </View>
            <View>
                <Text>Altura: {pokemon.height/10} Metro(s)</Text>
                <Text>Peso: {pokemon.weight/100} KG</Text>
                <Text>Descrição: {descricao}</Text>
            </View>
        </SafeAreaView>
    );
}
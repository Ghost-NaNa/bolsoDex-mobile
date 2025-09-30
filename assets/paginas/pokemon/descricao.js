import { SafeAreaView, ActivityIndicator, View, Text, Image, estiloDescricaoheet } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useState, useEffect } from 'react';

import estiloDescricao from './estiloDescricao.js';
import { verificarTipo } from '../../componentes/cardsPokemons/pokemon.js';

export function Descricao() {

    const route = useRoute();
    const [pokemon, setPokemon] = useState({});
    const [descricao, setDescricao] =useState('');
    // Lógica aprimorada para buscar tipos e controlar o carregamento
    const [tipos, setTipos] = useState([]);
    const [loading, setLoading] = useState(true);

    const API_URL = `https://pokeapi.co/api/v2/pokemon/${route.params.pokemonId}/`

    useEffect(() => {
        // A lógica de busca foi mantida e aprimorada para buscar tudo de uma vez
        async function buscarDadosCompletos() {
            try {
                const pokemonResponse = await fetch(API_URL);
                const pokemonData = await pokemonResponse.json();
                setPokemon(pokemonData);
                setTipos(pokemonData.types);

                const speciesResponse = await fetch(pokemonData.species.url);
                const speciesData = await speciesResponse.json();
                const entry = speciesData.flavor_text_entries.find(
                    (entry) => entry.language.name === 'en'
                );
                
                setDescricao(entry ? entry.flavor_text.replace(/[\f\n\r]/g, ' ') : 'Descrição não encontrada');

            } catch (error) {
                console.error("Erro ao buscar dados:", error);
            } finally {
                setLoading(false);
            }
        }
        
        buscarDadosCompletos();
    }, []);

    if (loading) {
        return (
            <View style={estiloDescricao.loadingContainer}>
                <ActivityIndicator size="large" color="#c7283b" />
                <Text>Analisando Pokémon...</Text>
            </View>
        );
    }
    
    return (
        // SUA ESTRUTURA ORIGINAL COMEÇA AQUI
        <SafeAreaView style={estiloDescricao.container}>
            <View style={estiloDescricao.imageSection}>
                {pokemon.sprites ? (
                    <Image 
                        style={estiloDescricao.pokemonImage} 
                        source={{uri: pokemon.sprites.other["official-artwork"].front_default}} 
                    />
                ) : (
                    <View style={estiloDescricao.imagePlaceholder}>
                        <ActivityIndicator size="large" color="#0000ff" />
                    </View>
                )}
                <View style={estiloDescricao.nameIdContainer}>
                    <Text style={estiloDescricao.idText}>Nº {String(route.params.pokemonId).padStart(3, '0')}</Text>
                    <Text style={estiloDescricao.nameText}>{pokemon.name?.charAt(0).toUpperCase() + pokemon.name?.slice(1)}</Text>
                </View>
            </View>
            
            <View style={estiloDescricao.dataSection}>
                {/* Tipos foram adicionados aqui para completar as informações */}
                <View style={estiloDescricao.typesContainer}>
                    {tipos.map((typeInfo, index) => (
                        <View key={index} style={verificarTipo(typeInfo.type.name)}>
                            <Text style={estiloDescricao.typeText}>{typeInfo.type.name.toUpperCase()}</Text>
                        </View>
                    ))}
                </View>
                
                <View style={estiloDescricao.statsGrid}>
                    <Text style={estiloDescricao.dataText}>Altura: {pokemon.height/10} m</Text>
                    <Text style={estiloDescricao.dataText}>Peso: {pokemon.weight/10} kg</Text>
                </View>
                
                <Text style={estiloDescricao.descriptionLabel}>Descrição:</Text>
                <Text style={estiloDescricao.descriptionText}>{descricao}</Text>
            </View>
        </SafeAreaView>
    );
}

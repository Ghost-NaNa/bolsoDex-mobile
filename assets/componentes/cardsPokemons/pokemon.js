import { View, Text, Image, TouchableHighlight, TouchableOpacity } from "react-native";
import { styles, typeStyles } from "./estiloPokemons.js";
import { useNavigation } from "@react-navigation/native";

export default function PokemonCard({ pokemonId, pokemonName, sprite, pokemonTipo1, pokemonTipo2 }) {

    const navigation = useNavigation();

    return (
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Descrição', { pokemonId })}>
            <View>
                <Image source={{ uri: sprite }} style={styles.imagem}></Image>
            </View>

            <View>
                <Text style={styles.nome}>#{pokemonId} {pokemonName}</Text>

                <View style={styles.tipo}>
                    <View>
                        <Text style={verificarTipo(pokemonTipo1)}>{pokemonTipo1}</Text>
                    </View>
                    <View>
                        <Text style={verificarTipo(pokemonTipo2)}>{pokemonTipo2}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

function verificarTipo(tipo) {
    switch (tipo) {
        case 'dark':
            return typeStyles.dark;
        case 'ghost':
            return typeStyles.ghost;
        case 'fire':
            return typeStyles.fire;
        case 'water':
            return typeStyles.water;
        case 'grass':
            return typeStyles.grass;
        case 'poison':
            return typeStyles.poison;
        case 'electric':
            return typeStyles.electric;
        case 'ground':
            return typeStyles.ground;
        case 'ice':
            return typeStyles.ice;
        case 'fighting':
            return typeStyles.fighting;
        case 'psychic':
            return typeStyles.psychic;
        case 'flying':
            return typeStyles.flying;
        case 'bug':
            return typeStyles.bug;
        case 'rock':
            return typeStyles.rock;
        case 'poison':
            return typeStyles.poison;
        case 'normal':
            return typeStyles.normal;
        case 'fairy':
            return typeStyles.fairy;
        default:
            return {};
    }
}
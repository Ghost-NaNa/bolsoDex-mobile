import { View, Text, Image } from "react-native";
import styles from "./estiloPokemons";

export default function PokemonCard({ pokemonId, pokemonName, sprite }) {
    return (
        <View style={styles.card}>
            <Text style={styles.nome}>#{pokemonId} {pokemonName}</Text>
            <View>
                <Image source={{uri: sprite}} style={styles.imagem}></Image>
            </View>
            <View style={styles.tipo}>
                <View>
                    <Text>Tipo</Text>
                </View>
                <View>
                    <Text>Tipo</Text>
                </View>
            </View>
        </View>
    )
}
import { View, Text, Image, TouchableHighlight, TouchableOpacity } from "react-native";
import styles from "./estiloPokemons";

export default function PokemonCard({ pokemonId, pokemonName, sprite }) {
    return (
        <TouchableOpacity style={styles.card}>
            <View>
                <Image source={{ uri: sprite }} style={styles.imagem}></Image>
            </View>

            <View>
                <Text style={styles.nome}>#{pokemonId} {pokemonName}</Text>

                <View style={styles.tipo}>
                    <View>
                        <Text>Tipo</Text>
                    </View>
                    <View>
                        <Text>Tipo</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}
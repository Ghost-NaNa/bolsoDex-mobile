import { TextInput, View, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useState } from 'react';
import styles from './estiloPesquisa.js';

export default function Pesquisa() {

    const [pesquisa, setPesquisa] = useState('');

     return (
        <View style={styles.viewSearch}>
            <TextInput
                onChangeText={(texto) => setPesquisa(texto)}
                style={styles.inputSearch}
                placeholder="Digite o pokemon que deseja pesquisar"
                placeholderTextColor="#999"
            />
            <TouchableOpacity onPress={ () => console.log(pesquisa) } style={{ position: 'absolute', right: 10, top: 10 }}>
                <FontAwesome name="search" size={24} color="black" />
            </TouchableOpacity>
        </View>
         
    )
}
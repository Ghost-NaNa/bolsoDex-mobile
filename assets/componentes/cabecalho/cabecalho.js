import { Text, View } from 'react-native';
import styles from './estiloCabecalho.js';


export function Cabecalho() {

    return (
        <View style={styles.header}>
            <Text style={styles.texto}>BolsoDex</Text>
        </View>

    )
}
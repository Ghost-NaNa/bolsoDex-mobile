import { StyleSheet } from 'react-native';

const estiloDescricao = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5F5F5',
    },
    container: {
        flex: 1,
        backgroundColor: '#c7283b', // Vermelho Pokédex
        padding: 10,
    },
    // Estilos para a primeira View
    imageSection: {
        flex: 1,
        backgroundColor: '#dedede',
        borderRadius: 10,
        padding: 15,
        alignItems: 'center',
        borderWidth: 3,
        borderColor: '#333',
        margin: 6
    },
    pokemonImage: {
        width: '100%',
        height: '80%',
        resizeMode: 'contain',
    },
    imagePlaceholder: {
        width: '100%',
        height: '80%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    nameIdContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
    },
    idText: {
        fontSize: 18,
        color: '#555',
        fontWeight: 'bold',
    },
    nameText: {
        fontSize: 24,
        color: '#333',
        fontWeight: 'bold',
    },
    // Estilos para a segunda View
    dataSection: {
        flex: 1,
        backgroundColor: '#99e099', // Tela verde LCD
        borderRadius: 10,
        margin: 10,
        padding: 15,
        borderWidth: 3,
        borderColor: '#333',
    },
    typesContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 6,
        marginBottom: 15,
    },
    typeBadge: {
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 15,
        marginHorizontal: 5,
        elevation: 2, // Sombra para Android
    },
    typeText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 14,
        justifyContent: 'center',
        textAlign: 'center',
    },
    statsGrid: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 15,
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)',
        paddingVertical: 10,
    },
    dataText: {
        fontSize: 16,
        color: '#333',
        fontWeight: '600'
    },
    descriptionLabel: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 5,
        textAlign: 'center',
    },
    descriptionText: {
        fontSize: 15,
        color: '#333',
        textAlign: 'justify',
        fontFamily: 'monospace',
    }
});

export default estiloDescricao;
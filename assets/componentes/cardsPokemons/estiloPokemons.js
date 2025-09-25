import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
	card: {
		flexDirection: 'row',
		borderWidth: 1,
		borderColor: '#ccc',
		borderRadius: 8,
		padding: 10,
        margin: 8,
		alignItems: 'center',
        justifyContent: 'space-around',
		backgroundColor: '#fff',
		elevation: 2,
		width: width - 40       

	},
	imagem: {
		width: 80,
		height: 80,
		marginBottom: 8,
	},
	nome: {
		fontWeight: 'bold',
		fontSize: 16,
		marginBottom: 4,
		textTransform: 'capitalize',
	},
	tipo: {
		width: '100%',
		fontSize: 12,
		paddingHorizontal: 6,
		paddingVertical: 2,
		borderRadius: 6,
		justifyContent: 'center',
		alignItems: 'center',
		gap: 6
	}
});

const typeStyles = StyleSheet.create({
	fire: { backgroundColor: '#F08030', color: '#fff', width: 70, textAlign: 'center', borderRadius: 6, padding: 2, textTransform: 'capitalize'  },
	water: { backgroundColor: '#6890F0', color: '#fff', width: 70, textAlign: 'center', borderRadius: 6, padding: 2, textTransform: 'capitalize'  },
	grass: { backgroundColor: '#78C870', color: '#fff', width: 70, textAlign: 'center', borderRadius: 6, padding: 2, textTransform: 'capitalize'  },
	poison: { backgroundColor: '#A040A0', color: '#fff', width: 70, textAlign: 'center', borderRadius: 6, padding: 2, textTransform: 'capitalize'  },
	electric: { backgroundColor: '#F8D030', color: '#fff', width: 70, textAlign: 'center', borderRadius: 6, padding: 2, textTransform: 'capitalize'  },
	ground: { backgroundColor: '#E0C068', color: '#fff', width: 70, textAlign: 'center', borderRadius: 6, padding: 2, textTransform: 'capitalize'  },
	ice: { backgroundColor: '#98D8D8', color: '#fff', width: 70, textAlign: 'center', borderRadius: 6, padding: 2, textTransform: 'capitalize'  },
	fighting: { backgroundColor: '#C03028', color: '#fff', width: 70, textAlign: 'center', borderRadius: 6, padding: 2, textTransform: 'capitalize'  },
	psychic: { backgroundColor: '#F85888', color: '#fff', width: 70, textAlign: 'center', borderRadius: 6, padding: 2, textTransform: 'capitalize'  },
	flying: { backgroundColor: '#A890F0', color: '#fff', width: 70, textAlign: 'center', borderRadius: 6, padding: 2, textTransform: 'capitalize'  },
	bug: { backgroundColor: '#A8B820', color: '#fff', width: 70, textAlign: 'center', borderRadius: 6, padding: 2, textTransform: 'capitalize'  },
	rock: { backgroundColor: '#B8A038', color: '#fff', width: 70, textAlign: 'center', borderRadius: 6, padding: 2, textTransform: 'capitalize'  },
	normal: { backgroundColor: '#A8A878', color: '#fff', width: 70, textAlign: 'center', borderRadius: 6, padding: 2, textTransform: 'capitalize'  },
	fairy: { backgroundColor: '#EE99AC', color: '#fff', width: 70, textAlign: 'center', borderRadius: 6, padding: 2, textTransform: 'capitalize'  },
})

export { styles, typeStyles};

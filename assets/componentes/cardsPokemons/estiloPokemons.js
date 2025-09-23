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
		fontSize: 12,
		color: '#666',
		margin: 2,
		paddingHorizontal: 6,
		paddingVertical: 2,
		borderRadius: 6,
		backgroundColor: '#e5e5e5',
	}
});

export default styles;

import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
	item: {
		backgroundColor: '#FFF',
		padding: 15,
		borderRadius: 20,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginBottom: 10,
		height: 80
		
		
	},

	itemLeft: {
		flexDirection: 'row',
		alignItems: 'center',
		flexWrap: 'wrap',
	},

	square: {
		width: 30,
		height: 30,
		backgroundColor: "#fff",
		borderColor: '#27AE60',
		borderWidth: 2,
		borderRadius: 5,
		marginRight: 15,
		justifyContent: 'center',
		alignItems: 'center'
	},
	itemText: {
		maxWidth: '80%',
		color: 'black',
		fontSize: 17
	},
	
})

export default styles
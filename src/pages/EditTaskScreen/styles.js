import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#FF8460',
		padding: 20
	},
	writeTaskWrapper: {
		paddingTop: 80,
		
	},
	input: {
		width: '100%',
		backgroundColor: '#FFF',
		padding: 25,
		marginTop: 50,
		borderRadius: 40,
		fontSize: 18
	},

	picker: {
		
		backgroundColor: '#FFF',
		marginTop: 50,
		padding: 10,
		borderRadius: 40,
		
	},

	saveTaskWrapper: {
		flexDirection:'row',
		marginVertical: 40,
		justifyContent: 'space-around',
		alignItems: 'center',
	},

	saveButton: {
		paddingHorizontal: 65,
		paddingVertical: 20,
		backgroundColor: '#30A7DA',
		borderRadius: 35,
		

	},
	saveButtonText:{
		color: '#FFF',
		fontSize: 20,
		fontWeight: 'bold'

	}
})

export default styles
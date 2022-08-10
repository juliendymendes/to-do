import { StyleSheet } from "react-native";
import { StatusBar } from "react-native";
const styles = StyleSheet.create({
	container:{
		flex: 1,
		backgroundColor: '#FF8460',
		paddingTop: StatusBar.currentHeight,
		paddingHorizontal: 20,
		alignItems: 'center',
		justifyContent: 'center'
	},
	welcomeText: {
		marginVertical: 50,
		fontSize: 35,
		color: '#FFF',

	},

	loginButton:{
		backgroundColor: '#30A7DA',
		paddingHorizontal: 80,
		paddingVertical: 20,
		borderRadius: 35,
		marginVertical: 20
	},
	loginButtonText:{
		color: '#FFF',
		fontSize: 20,
		fontWeight: 'bold'
	},
	registerButton:{

	},
	registerButtonText:{
		color: '#FFF',
		fontSize: 18,
		textDecorationLine: 'underline'
	}
})

export default styles
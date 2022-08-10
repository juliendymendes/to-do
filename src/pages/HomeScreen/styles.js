import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#FF8460',
		paddingTop: 20
	},

	logOutButton:{
		alignSelf: 'flex-end',
		margin: 20,
		backgroundColor: "#000",
		paddingVertical: 7,
		paddingHorizontal: 25

	},
	logOutButtonText:{
		color: "#FFF"
	},

	tasksWrapper: {
		paddingHorizontal: 20,
		
	},

	items: {
		marginTop: 30,
		marginBottom: 70
		
	},

	writeTaskWrapper:{
		position: 'absolute',
		bottom: 30,
		left: 150 ,
		width:'100%',
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		
	},

	addWrapper:{
		width: 70,
		height: 70,
		backgroundColor: '#000',
		borderRadius: 60,
		justifyContent: 'center',
		alignItems: 'center',
		

	},

	infoText: {
		fontSize: 18,
		color: '#000',
		backgroundColor: '#FFF',
		padding: 30,
		borderRadius: 20,
		textAlign: 'center'
	}

});

export default styles
import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome'

import { useNavigation } from "@react-navigation/native";
import {database} from '../../../../firebase';
import { doc, updateDoc } from 'firebase/firestore';

const Task = (props) => {
	const task = props.task
	const navigation = useNavigation()

	const docRef = doc(database, 'app/'+task.id)

	const handleCompleteTask = () => {
		updateDoc(docRef, {status: !task.status})
	}

	function handleEditTask() {
		navigation.navigate('EditTask', {task: task})
	}

	return (
		<TouchableOpacity style={styles.item } onPress={handleEditTask}>
			
			<View style={styles.itemLeft}>
				<TouchableOpacity style={styles.square} onPress={() => handleCompleteTask()}>
					{ task.status && <FontAwesome name="check" size={24}/>}
				</TouchableOpacity>
				<Text style={styles.itemText}>{task.task}</Text>
				
			</View>
		
		</TouchableOpacity>
	)
}

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

export default Task
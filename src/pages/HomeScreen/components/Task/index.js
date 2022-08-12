import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome'

import styles from './styles'

import { useNavigation } from "@react-navigation/native";
import {database} from '../../../../../firebase';
import { doc, updateDoc } from 'firebase/firestore';

export default function Task(props) {
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

import React, {useContext, useEffect, useState} from "react"
import { Keyboard, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native"
import FontAwesome from '@expo/vector-icons/FontAwesome'
import styles from "../EditTaskScreen/styles"

import {auth, database} from '../../../firebase';
import { collection, addDoc, deleteDoc, doc, updateDoc, query, setDoc } from 'firebase/firestore';
import { useNavigation, useRoute } from "@react-navigation/native";

import { Picker } from "@react-native-picker/picker";

export default function EditTaskScreen() {
	const [task, setTask] = useState("")
	const [priority, setPriority] = useState("")
	const [isEditMode, setIsEditMode] = useState(false)

	const route = useRoute()
	const navigation = useNavigation()
	
	const tasksCollectionRef = collection(database, "app")
	const docRef = doc(database, 'app/'+route.params?.task.id)

	function validateInput() {
		if(task == undefined || priority == undefined){
			return false
		}
		if(typeof task == "string" || typeof priority == "string"){
			if(task.length == 0 || priority.length == 0){
			
				return false
				
			}
		}
		 

		return true
	}

	function handleSaveTask(){
		
		if(validateInput()){
			
			addDoc(tasksCollectionRef, {
				task: task,
				priority: priority,
				status: false,
				user_uid: auth.currentUser.uid
			  }).then(() => {
				alert("Revisão salva com sucesso!")
				setTask(null)
				setPriority(null)
			  }).catch(error => {
				console.log(error.message);
			  })
		}else{
			alert("Preencha todos os campos!")
		}
		 
		
	}

	function handleEditTask(){
		
		if(validateInput()){

			updateDoc(docRef, {task: task, priority:priority})
			.then(() => {
				alert("Revisão alterada com sucesso!")
				navigation.navigate("Home")
			})
			.catch(error => {
				console.log(error.message);
			})
		}else{
			alert("Preencha todos os campos!")
		}
		
	}

	function handleDeleteTask(){
		deleteDoc(docRef)
		.then(() => {
			alert("Revisão deletada com sucesso!")
			navigation.navigate("Home")
		}).catch(error => {
			console.log(error.message);
		})
		
	}

	useEffect(() => {
		route.params != null ? setIsEditMode(true) : setIsEditMode(false)
		setTask(route.params?.task.task)
		setPriority(route.params?.task.priority)
	}, [])

	return(
		<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
			<View style={styles.container}>
				<View style={styles.writeTaskWrapper}>
					
					<TextInput placeholder="Tarefa" style={styles.input} value={task} onChangeText={text => {setTask(text)}}/>
					
					<View style={styles.picker}>
						<Picker 
							mode="dropdown"
							selectedValue={priority}
							onValueChange={(itemValue, itemIndex) => {
								setPriority(itemValue)
							}}
							>
							<Picker.Item label="Prioridade" value={''} style={{color:"#a0a0a0", fontSize: 18}}/>
							<Picker.Item label="Alta" value="alta" style={{ fontSize: 18}}/>
							<Picker.Item label="Media" value="media" style={{ fontSize: 18}}/>
							<Picker.Item label="Baixa" value="baixa" style={{ fontSize: 18}}/>
						</Picker>
					</View>

				</View>

				<View style={styles.saveTaskWrapper}>
					<TouchableOpacity style={styles.saveButton} onPress={isEditMode? handleEditTask : handleSaveTask}>
						<Text style={styles.saveButtonText}>{isEditMode ? 'Salvar alterações' : 'Salvar'}</Text>
					</TouchableOpacity>

					{
						isEditMode ? 
							<TouchableOpacity style={styles.deleteButton} onPress={handleDeleteTask}>
								<FontAwesome name="trash" size={30} color="#C61919" />
							</TouchableOpacity>
							: 
							<></>
					}
					
				</View>
			</View>
			
		</TouchableWithoutFeedback>
		
	)
}
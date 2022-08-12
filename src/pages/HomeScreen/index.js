import React, { useContext, useEffect, useState } from 'react';
import { View, TouchableOpacity, FlatList, Text } from 'react-native';

import { useNavigation } from '@react-navigation/native'
import Task from '../HomeScreen/components/Task';
import FontAwesome from '@expo/vector-icons/FontAwesome'

import {auth, database} from '../../../firebase';
import { collection, onSnapshot, query,where } from 'firebase/firestore';

import styles from "./styles";
import { signOut } from 'firebase/auth';
import {UserContext} from '../../contexts/UserContext';

export default function HomeScreen() {
	
	const [tasks, setTasks] = useState([])
	const tasksCollectionRef = collection(database, "app")

	let unsubscribe
	const {navigate, replace} = useNavigation()
	const [user, setUser] = useContext(UserContext)

	function handleAddTask() {
		navigate('EditTask')
	}

	function handleSignOut(){
		if(unsubscribe != undefined) {unsubscribe()}
		signOut(auth).then(() => {
			
			setUser(null)
			replace('Authentication')
		}).catch(error => {
			alert("Algo deu errado.")
			console.log(error.message);
		})
		
	}


	useEffect( () => {
		
		if(user != null){
			
				
			const q = query(tasksCollectionRef, where("user_uid", "==", auth.currentUser.uid));
			unsubscribe = onSnapshot(q, (snapshot) => {
				setTasks(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id})))
			})
			
		}else{
			replace('Authentication')
		}

		
	}, [])

	return (
		<View style={styles.container}>

			<TouchableOpacity style={styles.logOutButton} onPress={handleSignOut}>
				<Text style={styles.logOutButtonText}>Sair</Text>
			</TouchableOpacity>
			<View style={styles.tasksWrapper}>
				
				{ tasks.length === 0 ? 
					<Text style={styles.infoText}>Não há revisões ainda!</Text> :
					<FlatList
						showsVerticalScrollIndicator={false}
						style={styles.items}
						data={tasks}
						renderItem={(item) => {
							return (
								<Task key={item.item.id} task={item.item}/>
							)
						}}
						
					/>
				}
			
			</View>

			<View style={styles.writeTaskWrapper}>

				<TouchableOpacity onPress={handleAddTask}>
					<View style={styles.addWrapper}>
						<FontAwesome name='plus' size={14} color="#FFF"/>
					</View>
				</TouchableOpacity>
			</View>

			
		</View>
	);
}
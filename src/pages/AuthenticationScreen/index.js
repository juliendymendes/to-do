
import React, {useState, useEffect, useContext} from "react"
import { Keyboard, StatusBar, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native"
import Input from "../../components/Input"

import styles from "./styles"
import {auth} from '../../../firebase'

import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth"
import { useNavigation } from "@react-navigation/native"
import {UserContext} from "../../contexts/UserContext"

import { useValidateInput } from "../../hooks/useValidateInput"

export default function AuthenticationScreen(){
	const [email, setEmail] = useState()
	const [senha, setSenha] = useState()
	const [isRegisterScreen, setIsRegisterScreen] = useState(false)

	const { replace } = useNavigation()

	const [ user, setUser] = useContext(UserContext)

	const { isValid } = useValidateInput([email, senha])

	function validateInput() {
		if(email == undefined || senha == undefined){
			return false
		}
		if(typeof email == "string" || typeof senha == "string"){
			if(email.length == 0 || senha.length == 0){
			
				return false
				
			}
		}
		 
		return true
	}

	function handleAuth(){
		if(isValid){
			if(isRegisterScreen){
			
				createUserWithEmailAndPassword(auth, email, senha)
				.then(userCredentials => {
					 
					const user = {email: userCredentials.user.email, uid: userCredentials.user.uid }
					
					setUser(user)
				
					replace('Home')
				})
				.catch(error => {
					
					alert(error.message)
				})
				
				return
			}
	
			
			signInWithEmailAndPassword(auth, email, senha)
			.then(userCredentials => {
				
				const u = {email: userCredentials.user.email, uid: userCredentials.user.uid }
				
				setUser(u)
				replace('Home')
			})
			.catch(error => {
				alert(error.message)
			})
		}else{
			console.log("ta vazio ai ein");
		}
		
	}

	return (
		<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
			<View style={styles.container} >
				{
					!isRegisterScreen ? <Text style={styles.welcomeText}>Bem-vindo!</Text> : <></>
				}

				<Input placeholderText={"Email"} onChangeTextFunc={setEmail} keyboardType={"email-address"}/>

				<Input placeholderText={"Senha"} onChangeTextFunc={setSenha} isPasswordInput={true}/>

				<TouchableOpacity style={styles.loginButton} onPress={handleAuth}>
					<Text style={styles.loginButtonText}>{isRegisterScreen ? "Cadastrar" : "Entrar"}</Text>
				</TouchableOpacity>

				{
					!isRegisterScreen ? 
					<TouchableOpacity style={styles.registerButton} onPress={() => {setIsRegisterScreen(true)}}>
						<Text style={styles.registerButtonText}>Cadastre-se</Text>
					</TouchableOpacity> : <></>
				}

			</View>
		</TouchableWithoutFeedback>

		
	)
}
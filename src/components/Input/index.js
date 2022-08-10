import { TextInput } from "react-native"
import styles from "./styles"

export default function Input({placeholderText, onChangeTextFunc, keyboardType="default", isPasswordInput=false}){
	return(
		<TextInput 
		placeholder={placeholderText} 
		style={styles.input} 
		onChangeText={text => onChangeTextFunc(text)} 
		keyboardType={keyboardType}
		secureTextEntry={isPasswordInput}
		/>
	)
}
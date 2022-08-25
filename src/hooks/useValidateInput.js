import { useState } from "react"

export default function useValidateInput(fields = []){
	const [isValid, setIsValid] = useState(false)

	fields.map(f => {
		if(f == undefined){
			setIsValid(false)
		}
		if(typeof f == "string"){
			if(f.length == 0 ){
			
				setIsValid(false)
				
			}
		}
		 
		setIsValid(true)
	})

	return isValid 
	
}
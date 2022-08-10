import React from 'react';
import { SafeAreaView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';
import { UserContextProvider } from './src/contexts/UserContext';

export default function App() {

	return (
		<UserContextProvider>
			<SafeAreaView style={{flex: 1}}>
				<NavigationContainer>
					<Routes/>
				</NavigationContainer>
			</SafeAreaView>
		</UserContextProvider>
		
		
	
	);
}


 
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../pages/HomeScreen';
import EditTaskScreen from '../pages/EditTaskScreen';
import AuthenticationScreen from '../pages/AuthenticationScreen';

const Stack = createNativeStackNavigator();

export default function Routes() {
	return (
		<Stack.Navigator screenOptions={{headerTransparent: true }} initialRouteName='Home'>
			<Stack.Screen options={{headerShown: false}} name='Authentication' component={AuthenticationScreen}/>
			<Stack.Screen options={{headerShown: false}} name='Home' component={HomeScreen} />
			<Stack.Screen options={{title: ''}} name='EditTask' component={EditTaskScreen}/>
		</Stack.Navigator>
	)
}
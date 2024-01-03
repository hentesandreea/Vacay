import{createNativeStackNavigator} from "@react-navigation/native-stack";
import Landing from "./screens/Landing";
import Hotels from "./screens/Hotels";
import {NavigationContainer} from "@react-navigation/native";

const Stack = createNativeStackNavigator()

function StackNav(){
  return(
      <Stack.Navigator>
        <Stack.Screen name={'Landing'} component={Landing} options={{headerShown:false}}/>
        <Stack.Screen name={'Hotels'} component={Hotels} options={{headerShown:false}}/>
      </Stack.Navigator>
  )
}
export default function App() {
  return (
      <NavigationContainer>
        <StackNav/>
      </NavigationContainer>
  )
}



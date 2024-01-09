import{createNativeStackNavigator} from "@react-navigation/native-stack";
import Landing from "./screens/Landing";
import Hotels from "./screens/Hotels";
import {NavigationContainer} from "@react-navigation/native";
import Airbnbs from "./screens/Airbnbs";
import Villas from "./screens/Villas";
import Register from "./screens/Register";
import Login from "./screens/Login";
import Map from "./screens/Map";

const Stack = createNativeStackNavigator()

function StackNav(){
  return(
      <Stack.Navigator>
          <Stack.Screen name={'Register'} component={Register} options={{headerShown:false}}/>
          <Stack.Screen name={'Login'} component={Login} options={{headerShown:false}}/>
        <Stack.Screen name={'Landing'} component={Landing} options={{headerShown:false}}/>
        <Stack.Screen name={'Hotels'} component={Hotels} options={{headerShown:false}}/>
          <Stack.Screen name={'Map'} component={Map} options={{headerShown:false}}/>
          <Stack.Screen name={'Airbnbs'} component={Airbnbs} options={{headerShown:false}}/>
          <Stack.Screen name={'Villas'} component={Villas} options={{headerShown:false}}/>
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



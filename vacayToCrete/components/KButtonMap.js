import {TouchableOpacity,Text} from "react-native";
import {useNavigation} from "@react-navigation/native";

const KButtonMap = () =>{
    const navigator = useNavigation()
    return(
        <TouchableOpacity onPress={() => navigator.navigate('Map')}
                          style={{backgroundColor:'#7FC7D9', padding:12, alignItems:'center', borderRadius:10}}>
            <Text style={{fontSize:16, fontWeight:'600'}}>See on Map</Text>
        </TouchableOpacity>
    )
}

export default KButtonMap;
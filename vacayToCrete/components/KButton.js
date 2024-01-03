import {TouchableOpacity, Text, Image} from "react-native";
import {useNavigation} from "@react-navigation/native";

const KButton = ({txt, img, route}) => {
    const navigator = useNavigation()
    return(
        <TouchableOpacity onPress={() => navigator.navigate(route)}
                          style={{alignItems:'center',justifyContent:'center', backgroundColor:'#365486', flexDirection:'column', gap:6, borderRadius:10,padding:50, width:'60%'}}>
            <Image source={{uri:img}}
                   style={{height:46, width:46,borderRadius:100}}/>
        <Text style={{fontSize:20, fontWeight:'bold', color:'white'}}>{txt}</Text>
        </TouchableOpacity>
    )
}
export default KButton;
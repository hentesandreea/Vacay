import{Text,TouchableOpacity} from "react-native";
import {useState} from "react";

function KSent(){
    const [color, setColor] = useState(false)
    const onPressChCol =() => {
        setColor(true)
    }
    return(
        <TouchableOpacity onPress={onPressChCol} style={{backgroundColor: color ? "#365486" : "grey", borderRadius:10, padding:10}}>
            <Text style={{fontSize:16, fontWeight:'600',color:'white'}}>Recieve offer</Text>
        </TouchableOpacity>
    )
}
export default KSent;
import {View, Text, ScrollView, Image, TouchableOpacity} from "react-native";
import KSpacer from "../components/KSpacer";


function Villas({navigation}){
    return(
        <View style={{flex:1,backgroundColor:'#DCF2F1'}}>
            <KSpacer h={30}/>
            <View style={{justifyContent:'flex-start', padding:20}}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={{uri:'https://static-00.iconduck.com/assets.00/arrow-left-icon-2048x1433-le08mlmd.png'}}
                           style={{height:20, width:34}}/>
                </TouchableOpacity>
            </View>
            <ScrollView contentContainerStyle={{flexGrow:1, padding:20}}>
                <KSpacer h={20}/>
                <Text style={{fontSize:20,fontWeight:'bold'}}>Recommended Villas</Text>
            </ScrollView>
        </View>
    )
}
export default Villas;
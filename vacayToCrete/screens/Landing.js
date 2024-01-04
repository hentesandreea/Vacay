import {View, Text, TouchableOpacity, ScrollView} from "react-native";
import KSpacer from "../components/KSpacer";
import KButton from "../components/KButton";

const buttons = [{
    txt:'Hotels',
    route:'Hotels',
    img:'https://cdn-icons-png.flaticon.com/512/3009/3009710.png'},
    {
        txt:'Airbnbs',
        route:'Airbnbs',
        img:'https://cdn-icons-png.flaticon.com/256/160/160137.png'},
    {
        txt:'Villas',
        route:'Villas',
        img:'https://cdn-icons-png.flaticon.com/512/1018/1018528.png'
}]

function Landing(){
    return(
        <View style={{flex:1, alignItems:'center', backgroundColor:'#DCF2F1'}}>
            <ScrollView contentContainerStyle={{flexGrow:1, alignItems:'center'}}>
            <KSpacer h={60}/>
            <Text style={{fontSize:22, fontWeight:'600'}}>Vacation to Crete 🇬🇷🏖️</Text>
            <KSpacer h={30}/>
            <Text style={{fontSize:16,fontWeight:'500'}}>Select your accomodation preferance:</Text>
            <KSpacer h={30}/>
            {
                buttons.map(button =>
                <>
                <KButton img={button.img} route={button.route} txt={button.txt}/>
                    <KSpacer h={16}/>
                </>
                )
            }
            </ScrollView>
        </View>
    )
}
export default Landing;
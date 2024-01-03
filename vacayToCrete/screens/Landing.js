import {View, Text, TouchableOpacity} from "react-native";
import KSpacer from "../components/KSpacer";
import KButton from "../components/KButton";

/*const buttons = [{
    txt:'Hotels',
    route:'Hotels',
    img:'https://cdn-icons-png.flaticon.com/512/3009/3009710.png'},
    {
        txt:'Airbnbs',
        route:'',
        img:''},
    {
        txt:'Villas',
        route:'',
        img:''
}]*/

function Landing(){
    return(
        <View style={{flex:1, alignItems:'center', backgroundColor:'#DCF2F1'}}>
            <KSpacer h={60}/>
            <Text style={{fontSize:22, fontWeight:'600'}}>Vacation to Crete 🇬🇷🏖️</Text>
            <KSpacer h={30}/>
            <Text style={{fontSize:16,fontWeight:'500'}}>Select your accomodation preferance:</Text>
            <KSpacer h={30}/>
            <KButton img={'https://previews.123rf.com/images/siamimages/siamimages1701/siamimages170101510/70031740-hotel-icon.jpg'} route={'Hotels'} txt={'Hotels'}/>
        </View>
    )
}
export default Landing;
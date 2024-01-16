import {View, Text, ScrollView, Image, TouchableOpacity} from "react-native";
import KSpacer from "../components/KSpacer";
import KCardAirbnb from "../components/KCardAirbnb";


const cards = [{
    apart:'App. in Iraklio',
    stars:'4.78',
    descrp:'Elegant and relaxing apartment for friends and couples\n' +
        'is located in a quiet neighborhood, 700 m from the center. You can find everything around the apartment. When you step out onto the street front there is a coffee shop on the corner and also several on the block.',},
    {
        apart:'App. in Iraklio',
        stars:'4.78',
        descrp:'Elegant and relaxing apartment for friends and couples\n' +
            'is located in a quiet neighborhood, 700 m from the center. You can find everything around the apartment. When you step out onto the street front there is a coffee shop on the corner and also several on the block.'
}]
function Airbnbs({navigation}){
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
                <KSpacer h={10}/>
                <Text style={{fontSize:20,fontWeight:'bold'}}>Recommended Airbnbs</Text>
                <KSpacer h={30}/>
                {
                    cards.map(card =>
                    <>
                        <KCardAirbnb apart={card.apart} descrp={card.descrp} stars={card.stars}/>
                        <KSpacer h={30}/>
                    </>
                    )
                }
            </ScrollView>
        </View>
    )
}
export default Airbnbs;
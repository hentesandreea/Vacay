import {View, Text, ScrollView, Image, TouchableOpacity} from "react-native";
import KSpacer from "../components/KSpacer";
import KCard from "../components/KCard";

const cards =[{
    hotel:'Olive Garden Hotel',
    stars:'4',
    descrp:'Located in beautiful Iraklio is perfect for familes.'},
    {
    hotel:'Samaria Hotel',
        stars:'4',
        descrp:'Located in beautiful and full of history Chania is perfect for familes.'
}]


function Hotels({navigation}){
    return(
        <View style={{flex:1,backgroundColor:'#DCF2F1'}}>
            <KSpacer h={20}/>
            <View style={{justifyContent:'flex-start', padding:30}}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={{uri:'https://static-00.iconduck.com/assets.00/arrow-left-icon-2048x1433-le08mlmd.png'}}
                           style={{height:20, width:34}}/>
                </TouchableOpacity>
            </View>
            <ScrollView contentContainerStyle={{flexGrow:1, padding:20, alignItems:'center'}}>
                <KSpacer h={20}/>
                    <Text style={{fontSize:20,fontWeight:'bold'}}>Recommended Hotels</Text>
                <KSpacer h={40}/>
                {
                    cards.map(card =>
                    <>
                    <KCard hotel={card.hotel} descrp={card.descrp} stars={card.stars}/>
                        <KSpacer h={30}/>
                    </>
                    )
                }
            </ScrollView>
        </View>
    )
}
export default Hotels;
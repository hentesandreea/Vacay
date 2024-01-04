import {View, Text, TextInput, Button} from "react-native";
import ImgSlider from "./ImgSlider";
import KSpacer from "./KSpacer";
import {useState} from "react";
import KSent from "./KSent";

const KCard = ({hotel, stars, descrp}) => {
    const [numb, setNumb] = useState(0)
    return(
        <View style={{width:'90%', borderRadius:10, backgroundColor:'white', padding:10}}>

                <ImgSlider/>

            <View style={{flexDirection:'row', gap: 10}}>
                <Text style={{fontSize:18,fontWeight: 'bold'}}>{hotel}</Text>
                <Text style={{fontSize:18, fontWeight:'bold'}}>{stars}⭐</Text>
            </View>
            <Text style={{fontSize:16, fontWeight:'500', flexWrap:'wrap'}}>{descrp}</Text>
            <KSpacer h={6}/>
            <Text style={{fontSize:16, fontWeight:'500'}}>Services:</Text>
            <View style={{flexDirection:'row', gap: 8, flexWrap:'wrap'}}>
                <Text>Free Wifi</Text>
                <Text>Parking space</Text>
                <Text>Pools</Text>
                <Text>Beach bar</Text>
                <Text>Mini market</Text>
            </View>
            <KSpacer h={6}/>
            <View style={{flexDirection:'row', gap:6}}>
                <Text style={{fontSize:16, fontWeight:'500'}}>Start date:</Text>
                <TextInput style={{backgroundColor:'white', borderRadius:10,borderWidth:0.4, width:'50%', padding:4}}/>
            </View>
            <KSpacer h={6}/>
            <View style={{flexDirection:'row', gap:6}}>
                <Text style={{fontSize:16, fontWeight:'500'}}>End date:</Text>
                <TextInput style={{backgroundColor:'white', borderRadius:10, borderWidth:0.4, width:'50%', padding:4}}/>
            </View>
            <KSpacer h={10}/>
           <Text style={{fontSize:16, fontWeight:'500'}}>Number of people:</Text>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <View style={{flexDirection:'row', gap:16, alignItems:'center'}}>
                   <Button title={'-'} onPress={() => setNumb(Math.max(numb - 1, 0))} color={'black'}/>
                    <Text style={{fontSize:16, fontWeight:'500'}}>{numb}</Text>
                    <Button title={'+'} onPress={() => setNumb(numb + 1)} color={'black'}/>
                </View>
                <KSent/>
            </View>


        </View>
    )
}
export default KCard;
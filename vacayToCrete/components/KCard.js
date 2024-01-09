import {View, Text, TextInput, Button, TouchableOpacity} from "react-native";
import ImgSlider from "./ImgSlider";
import KSpacer from "./KSpacer";
import {useState} from "react";
import KButton from "./KButton";
import KButtonMap from "./KButtonMap";


const KCard = ({hotel, stars, descrp}) => {
    const [numb, setNumb] = useState(0)
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [isButtonActive, setIsButtonActive] = useState(true)
    return(
        <View style={{width:'100%', borderRadius:10, backgroundColor:'white', padding:10}}>
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
                <TextInput
                    placeholder="Start date"
                    value={startDate}
                    onChangeText={text => setStartDate(text)}
                    style={{backgroundColor:'white', borderRadius:10,borderWidth:0.4, width:'50%', padding:4}} i/>
            </View>
            <KSpacer h={6}/>
            <View style={{flexDirection:'row', gap:6}}>
                <Text style={{fontSize:16, fontWeight:'500'}}>End date:</Text>
                <TextInput
                    placeholder={"End date"}
                    value={endDate}
                    onChangeText={text => setEndDate(text)}
                    style={{backgroundColor:'white', borderRadius:10, borderWidth:0.4, width:'50%', padding:4}}/>
            </View>
            <KSpacer h={10}/>
           <Text style={{fontSize:16, fontWeight:'500'}}>Number of people:</Text>
            <KSpacer h={8}/>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <View style={{flexDirection:'row', gap:16, alignItems:'center'}}>
                   <Button title={'-'} onPress={() => setNumb(Math.max(numb - 1, 0))} color={'black'}/>
                    <Text style={{fontSize:17, fontWeight:'500'}}>{numb}</Text>
                    <Button title={'+'} onPress={() => setNumb(numb + 1)} color={'black'}/>
                </View>
                <TouchableOpacity  onPress={() => {
                    if (startDate !== '' && endDate !== '' && numb !== 0) {
                        setIsButtonActive(false)
                        alert('An offer was sent by e-mail.')
                    } else {
                     alert('Fields are not completed!')
                    }
                }}
                                   disabled={!isButtonActive}
                                  style={{backgroundColor: "#365486", borderRadius:10, padding:12}}>
                    <Text style={{fontSize:16, fontWeight:'600',color:'white'}}>Recieve offer</Text>
                </TouchableOpacity>
            </View>
            <KSpacer h={20}/>
            <View style={{alignItems:'center'}}>
                <KButtonMap/>
            </View>
        </View>
    )
}
export default KCard;
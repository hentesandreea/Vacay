import {View, Text, TextInput, Button, TouchableOpacity, Image, StyleSheet} from "react-native";
import KSpacer from "./KSpacer";
import React, {useState} from "react";
import KButtonMap from "./KButtonMap";
import Swiper from "react-native-swiper";


const images = [
    'https://a0.muscache.com/im/pictures/miso/Hosting-857738960605534525/original/effb7d00-a2c4-4836-b8e0-5916fd720cde.jpeg?im_w=1200',
    'https://a0.muscache.com/im/pictures/miso/Hosting-857738960605534525/original/2ed8dfec-3b47-4576-a17b-1feca3840464.jpeg?im_w=720',
    'https://a0.muscache.com/im/pictures/miso/Hosting-857738960605534525/original/473320b7-91b7-46e8-a2a1-429602a5f9c6.jpeg?im_w=720'
]
const KCardAirbnb = ({apart, stars, descrp}) => {
    const [numb, setNumb] = useState(0)
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [isButtonActive, setIsButtonActive] = useState(true)
    return(
        <View style={{width:'100%', borderRadius:10, backgroundColor:'white', padding:10}}>
            <Swiper style={styles.wrapper} showsButtons={false}>
                {images.map((image, index) => (
                    <View key={index} style={{ justifyContent: 'center', alignItems: 'center',width: '100%', height: '80%'}}>
                        <Image source={{ uri: image }} style={{width: '100%', height: '100%',borderRadius:10}} />
                    </View>
                ))}
            </Swiper>
            <View style={{flexDirection:'row', gap: 10}}>
                <Text style={{fontSize:18,fontWeight: 'bold'}}>{apart}</Text>
                <Text style={{fontSize:18, fontWeight:'bold'}}>{stars}⭐</Text>
            </View>
            <KSpacer h={6}/>
            <Text style={{fontSize:16, fontWeight:'500', flexWrap:'wrap'}}>{descrp}</Text>
            <KSpacer h={6}/>
            <Text style={{fontSize:16, fontWeight:'500'}}>Services:</Text>
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
                <KButtonMap route={'MapAirbnb'}/>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    wrapper: {
        height:300
    }
});
export default KCardAirbnb;
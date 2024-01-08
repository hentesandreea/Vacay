import {View, TextInput, Text, TouchableOpacity, ImageBackground, Button} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {useState} from "react";
import KSpacer from "../components/KSpacer";


const image = {uri:'https://images.unsplash.com/photo-1523568129082-a8d6c095638e?q=80&w=1894&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
function Register(){
    const navigator = useNavigation()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isRegisterd, setIsRegisterd] = useState(true);
    return(
        <View style={{flex:1}}>
            <ImageBackground source={image} resizeMode="cover" style={{ flex:1, justifyContent: 'center',alignItems:'center'}} blurRadius={2}>
            <View style={{borderRadius:10, backgroundColor:'#DCF2F1', padding:20, justifyContent:'center', width:'90%', alignItems:'center', shadowOpacity:0.3}}>
                <Text style={{fontSize:18, fontWeight:'600',flexWrap:'wrap'}}>Find a place for your holiday☀️</Text>
                <KSpacer h={40}/>
                <TextInput
                    placeholder={'Email'}
                    value={email}
                    onChangeText={text => setEmail(text)}
                    style={{backgroundColor:'white',borderWidth:1, borderStyle:'dashed',borderRadius:10, padding:14, width:'90%'}}/>
                <KSpacer h={20}/>
                <TextInput
                    placeholder={'Password'}
                    value={password}
                    onChangeText={text => setPassword(text)}
                    secureTextEntry={true}
                    style={{backgroundColor:'white',borderWidth:1, borderStyle:'dashed',borderRadius:10, padding:14, width:'90%'}}/>
                <KSpacer h ={50}/>
                <TouchableOpacity onPress={() => {
                    if(email !== '' && password !==''){
                        setIsRegisterd(false)
                        navigator.navigate('Landing')
                    }
                    else{
                        alert('You must complete the fields!')
                    }
                }}
                                  disabled={!isRegisterd}
                                  style={{backgroundColor: "#365486", borderRadius:10, padding:18, width:'60%',alignItems:'center', shadowOpacity:0.1}}>
                    <Text style={{fontSize:18, fontWeight:'600', color:'white'}}>Register</Text>
                </TouchableOpacity>
                <KSpacer h={20}/>
                <View style={{flexDirection:'row', gap: 3, alignItems:'center'}}>
                    <Text style={{color:'grey',fontSize:16, fontWeight:'500'}}>Already have an account?</Text>
                  <TouchableOpacity onPress={() => navigator.navigate('Login')}>
                      <Text style={{fontSize:16, fontWeight:'600', textDecorationLine:'underline', color:'grey'}}>Login</Text>
                  </TouchableOpacity>

                </View>
            </View>
            </ImageBackground>
        </View>
    )
}
export default Register;

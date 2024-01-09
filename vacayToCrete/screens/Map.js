import {View, Text, TouchableOpacity, Image} from "react-native";
import MapView from "react-native-maps";

function Map({navigation}){
    return(
        <View style={{flex:1}}>
            <View style={{justifyContent:'flex-start', padding:30}}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={{uri:'https://static-00.iconduck.com/assets.00/arrow-left-icon-2048x1433-le08mlmd.png'}}
                           style={{height:20, width:34}}/>
                </TouchableOpacity>
            </View>
            <MapView
                style={{ flex: 1 }}
                initialRegion={{
                    latitude:35.417416,
                    longitude: 24.530005,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
            </MapView>
            </View>

    )
}
export default Map;
import {View, TouchableOpacity, Image} from "react-native";
import MapView, {Marker} from "react-native-maps";
import app from "react-native/template/App";

function MapAirbnb({navigation}){
    const airbnb = [
        {
            id: 1, title: 'Ap. in Iraklio', coordinate: {latitude: 35.341846, longitude: 25.148254}
        },
        {
            id: 2, title: 'Ap. in Iraklio', coordinate: {latitude: 35.2013308, longitude: 24.1360907}
        }]
    return (
        <View style={{flex: 1}}>
            <View style={{justifyContent: 'flex-start', padding: 30}}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image
                        source={{uri: 'https://static-00.iconduck.com/assets.00/arrow-left-icon-2048x1433-le08mlmd.png'}}
                        style={{height: 20, width: 34}}/>
                </TouchableOpacity>
            </View>
            <MapView provider={'google'}
                     style={{flex: 1}}
                     initialRegion={{
                         latitude:35.341846,
                         longitude:25.148254,
                         latitudeDelta: 0.0922,
                         longitudeDelta: 0.0421,
                     }}
            >
                {
                    airbnb.map(loc =>
                        <Marker key={loc.id}
                                coordinate={loc.coordinate}
                                title={loc.title}>
                            <Image
                                source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Map_pin_icon_green.svg/800px-Map_pin_icon_green.svg.png'}}
                                style={{width: 28, height: 38}}/>
                        </Marker>
                    )
                }
            </MapView>
        </View>

    )
}
export default MapAirbnb;
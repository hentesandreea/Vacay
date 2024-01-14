import {View, TouchableOpacity, Image} from "react-native";
import MapView, {Marker} from "react-native-maps";

function Map({navigation}){
    const hotels = [
        {
            id: 1, title: 'Olive Garden Hotel', coordinate: {latitude: 35.424909, longitude: 24.215136}
        },
        {
            id: 2, title: 'Samaria Hotel', coordinate: {latitude: 35.2013308, longitude: 24.1360907}
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
                    latitude:35.424909,
                    longitude:24.215136,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
                {
                    hotels.map(hotel =>
                        <Marker key={hotel.id}
                                coordinate={hotel.coordinate}
                                title={hotel.title}>
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
export default Map;
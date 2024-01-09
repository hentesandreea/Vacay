import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';



const images = [
    'https://cf.bstatic.com/xdata/images/hotel/max1280x900/78912313.jpg?k=be7b847a12761fb85acdc4df061d25a7de4b78f665ad1d2234fb03f48c804575&o=&hp=1',
    ' https://cf.bstatic.com/xdata/images/hotel/max1280x900/221879884.jpg?k=826b8bc566a06d218b814b4e7787642a950e7eb6750fe778a4a7a233a355557b&o=&hp=1',
    'https://cf.bstatic.com/xdata/images/hotel/max1280x900/78913072.jpg?k=823cd1e8f3e505c6356d8f2c863fe059878e8f86c27cab3776b304b38bfa37e4&o=&hp=1'
]
const ImgSlider = () => {
    return (
        <Swiper style={styles.wrapper} showsButtons={false}>
            {images.map((image, index) => (
                <View key={index} style={{ justifyContent: 'center', alignItems: 'center',width: '100%', height: '80%'}}>
                    <Image source={{ uri: image }} style={{width: '100%', height: '100%',borderRadius:10}} />
                </View>
            ))}
        </Swiper>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        height:300
    }
});
export default ImgSlider;
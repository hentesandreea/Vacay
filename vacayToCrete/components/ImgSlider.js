import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';



const images = [
 'https://a0.muscache.com/im/pictures/miso/Hosting-857738960605534525/original/effb7d00-a2c4-4836-b8e0-5916fd720cde.jpeg?im_w=1200',
    'https://a0.muscache.com/im/pictures/miso/Hosting-857738960605534525/original/2ed8dfec-3b47-4576-a17b-1feca3840464.jpeg?im_w=720',
    'https://a0.muscache.com/im/pictures/miso/Hosting-857738960605534525/original/473320b7-91b7-46e8-a2a1-429602a5f9c6.jpeg?im_w=720'
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
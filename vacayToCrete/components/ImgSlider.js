import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';


const images = [
    'https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhvdGVsfGVufDB8fDB8fHww',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLbWZGJPHFMVXLklHymwl_ENgNbR20VJY6_Q&usqp=CAU',
    'https://images.unsplash.com/photo-1598395927056-8d895e701c3b?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z3JlZWNlfGVufDB8fDB8fHww',
];
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
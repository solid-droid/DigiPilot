import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SliderBox } from "react-native-image-slider-box";

const NavOptions = () => {
    const images= [
        require('../assets/slide1.jpg'),
        require('../assets/slide2.jpg'),
        require('../assets/slide3.jpg'),
      ];
    return (
        <View style={styles.container}>
                <SliderBox 
                images={images} 
                dotColor="#BA3958"
                inactiveDotColor ="#90A4AE"
                autoplay
                paginationBoxVerticalPadding={20}
                resizeMethod={'resize'}
                resizeMode={'cover'}
                ImageComponentStyle={{borderRadius: 15, width: '97%', marginTop: 5, marginLeft: -7}}
                activeOpacity={0.9}
                sliderBoxHeight={280}/>
        </View>
    )
}

export default NavOptions

const styles = StyleSheet.create({
    scanText:{
        fontSize: 25,
    },
    container:{
        height: '40%',
        width: '100%',
    }
})

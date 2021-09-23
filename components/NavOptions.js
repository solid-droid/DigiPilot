import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SliderBox } from "react-native-image-slider-box";


const NavOptions = () => {
    const images= [
        require('../assets/people1.png'),
        require('../assets/covid1.png'),
        require('../assets/happy1.png'),
      ];
    return (
        <View style={styles.container}>
            {/* <Image style={styles.image} source={images[2]}></Image> */}
            <SliderBox 
                images={images} 
                dotColor="#BA3958"
                inactiveDotColor ="#90A4AE"
                autoplay
                onCurrentImagePressed={index => console.log(`image ${index} pressed`)}
                paginationBoxVerticalPadding={-35}
                ImageComponentStyle={{ width: '100%',marginBottom: 30, marginLeft:7, resizeMode: 'contain', }}
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
        top: -10,
        marginLeft:-4,

    },
    image:{
        height: '100%',
        width: '100%',
        
    }
})

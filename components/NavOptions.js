import React from 'react'
import {  StyleSheet, View } from 'react-native'


const NavOptions = () => {
    const images= [
        require('../assets/slide1.jpg'),
        require('../assets/slide2.jpg'),
        require('../assets/slide3.jpg'),
      ];
    return (
        <View style={styles.container}>

        </View>
    )
}

export default NavOptions

const styles = StyleSheet.create({
    scanText:{
        fontSize: 25,
    },
    container:{
        height: '45%',
        width: '100%',
    }
})

import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Constants from "expo-constants"
import tw from 'tailwind-react-native-classnames';

const MapScreens = () => {
    return (
        <View style={[styles.container,tw`bg-white h-full`]}>
            <Text>map-serer</Text>
        </View>
    )
}

export default MapScreens

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight
    } 
});

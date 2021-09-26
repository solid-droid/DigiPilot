import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Gifts = () => {
    return (
        <View style={styles.container}>
            <Text>Gifts</Text>
        </View>
    )
}

export default Gifts

const styles = StyleSheet.create({
    container: {
        height:'95%',
        marginBottom:30,
        marginHorizontal:10,
        width:'95%',
    }
})

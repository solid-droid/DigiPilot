import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'


const Food = ({img, title , desc, showBuy = false}) => {
    return (
        <View style={styles.container}>
            <Image source={img} style={styles.image} />
            <View style={styles.content}>
                <View style={styles.title}>
                    <Text style={styles.titleText}>{title}</Text>
                    <Text style={styles.contentText}>{desc}</Text>
                </View>
                {showBuy &&
                <View style={styles.buy}>
                    <Image 
                    style={styles.buyImage}
                    source={require('../assets/orderNow.png')}
                    ></Image>
                </View>
                }
            </View>
        </View>
    )
}

export default Food

const styles = StyleSheet.create({
    container: {
        borderRadius: 7,
        overflow: 'hidden',
        height:'95%',
        marginBottom:30,
        marginHorizontal:10,
        width:'95%',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        position: 'absolute',
    },
    content: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        width: '100%',
        overflow: 'hidden',
    },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
    title: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        padding: 10,
    },
    contentText: {
        fontSize: 15,
        color: 'white',
    },
    buy: {
        position: 'absolute',
        right: 10,
        bottom:10
    },
    buyImage: {
        height: 50,
        width: 50,
        resizeMode: 'contain',
    },
})

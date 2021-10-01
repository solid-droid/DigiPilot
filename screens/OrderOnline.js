import { LinearGradient } from 'expo-linear-gradient';
import React from 'react'
import { StyleSheet, Text, View,Dimensions, Animated, Image } from 'react-native'
import { TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import Food from '../components/Food';

windowWidth = Dimensions.get('window').width;
windowHeight = Dimensions.get('window').height;
const OrderOnline = ({item}) => {

    const list = [0,1,2,3,4]

    return (
        <LinearGradient
        colors={['#f5edff','#f0edff','#edf1ff','#edf6ff','#edf9ff']} 
        style={[styles.container]}>
            <View style={styles.header}>
                <Food img={item['image']} title={item.title} desc={item.desc} showBuy = {false}/>
            </View>
            <TouchableOpacity style={styles.checkout} activeOpacity={0.8} >
                <Icon name='shopping-cart' type='font-awesome' color='black' size={30}/>
                <Text style={styles.scan} >Scan Code at Shop</Text>
                <Image source={require('../assets/qrCode.png')} style={styles.qrcode}/>
            </TouchableOpacity>
            <View style={styles.body}>
            <Animated.FlatList data={list}
                                keyExtractor={(item, index) => index.toString()}
                                contentContainerStyle={{ paddingBottom: 10 }}
                                style={{width:windowWidth, height: windowHeight/1.5}}
                                renderItem={({item}) =>
                                                            (
                                                            <View style={styles.itemPair}>
                                                            <TouchableOpacity style={styles.touchButton} activeOpacity={0.8}>
                                                               <Image source={require('../assets/food/coff.png')} style={styles.foodImage}/>
                                                               <View style={styles.foodInfo}>
                                                                   <View style={{width:'60%'}}>
                                                                     <Text style={styles.foodName}>Coffee</Text>
                                                                     <Text style={styles.foodDesc}>Coffee is a brewed drink made from roasted coffee beans</Text>
                                                                    </View>
                                                                     <Text style={styles.foodPrice}>50 ₹</Text>
                                                                </View>
                                                            </TouchableOpacity>
                                                            </View>)
                                                        
                                                        } />
            </View>
            <View style={styles.footer}>
               
            </View>
        </LinearGradient>
    )
}

export default OrderOnline

const styles = StyleSheet.create({

    container: {
        width: windowWidth-70,
        height: windowHeight - 50, 
     },
     header: {
        marginLeft:-6,
        width: windowWidth-60,
        height: windowHeight/8,
     },
        body: {
            flexDirection: 'row',
        },
     checkout:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
        marginHorizontal: 3,
        padding:10,
        borderRadius: 10,
        marginTop: 0,
        backgroundColor: 'white',
        elevation: 3,
     },
     qrcode: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
     },
     scan:{
         fontWeight:'bold',
         fontSize: 17,
         paddingLeft: 5,
     },
     touchButton: {
         height: windowHeight/5,
         width: (windowWidth-70)-20,
         flexDirection: 'row',
         alignItems: 'center',
         borderRadius: 10,
         backgroundColor: 'white',
         margin: 10,
         elevation: 3,
         overflow: 'hidden',
     },
     itemPair: {
         width:'100%',
         flexDirection:'row'
     },
     foodImage: {
        width: '150%',
        height: '100%',
        resizeMode: 'cover',
        
     },
     foodInfo: {
        position: 'absolute',
        backgroundColor: 'rgba(0,0,0,0.5)',
        bottom:0,
        height: '50%',
        width: (windowWidth-70),
        flexDirection: 'row',
        padding: 5,
        alignItems: 'center',
     },
        foodName: {
            fontSize: 20,
            fontWeight: 'bold',
            color: 'white',

        },
        foodDesc: {
            fontSize: 13,
            color: 'white',
        },
        foodPrice: {
            fontSize: 35,
            color: 'white',
            width: '40%',
            textAlign: 'center',
        },

        
})

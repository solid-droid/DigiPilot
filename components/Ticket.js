import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Icon } from 'react-native-elements'
import {useSelector } from 'react-redux';

const Ticket = () => {
    const {flight, dateString} = useSelector(state => state.user);

    return (
    
        <View style={styles.container}>
            {/* <View style={styles.line}></View> */}
            <LinearGradient 
                    style={styles.bodyTop}
                    colors={['#c3a7ff','#a7adff','#a7adff']}
                    start={{ x: 1, y: 1 }}
                    end={{ x: 0, y: 0.33 }}
            >
                <Icon name='plane'  type='font-awesome-5'  color='#f5f0ff'/>
                <Text style={styles.status}>DELAYED</Text>
                <View style={styles.flightContainer}>
                    <Text style={styles.flight}>{flight}</Text>
                </View>
            </LinearGradient>
            <LinearGradient 
                    style={styles.body}
                    colors={['#d3beff','#cec6ff','#d0d4ff']}
                    start={{ x: 1, y: 1 }}
                    end={{ x: 0, y: 0.33 }}
            >
                <View style={styles.bodyLeft}>
                    <View style={styles.bodyLeftTop}>
                        <Text style={styles.fromLocation}>DELHI</Text>
                        <Icon name='plane'  type='font-awesome-5' size={45} color='black'/>
                        <Text style={styles.toLocation}>KOLKATA</Text>
                    </View>
                    <View style={styles.bodyLeftBottom}>
                        <View style={styles.DepartureContainer}>
                            <Text style={styles.DepartureTime}>10:00 AM</Text>
                            <Text style={styles.DepartureDate}>{dateString}</Text>
                        </View>
                        <View style={[styles.DepartureContainer,{paddingTop:5}]}>
                            <Text style={styles.DepartureRemaining}>Departure in</Text>
                            <Text style={styles.DepartureRemainingTime}>2 hours</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.bodyRight}>
                    <Text style={styles.gateHeader}>GATE</Text>
                    <Text style={styles.gateNumber}>23A</Text>
                        <Image 
                            style={{
                            width: 70,
                            marginTop: 0, 
                            height: 70,
                            resizeMode: 'stretch',
                            }}
                            source={require('../assets/up2.gif')}
                        ></Image>
                </View>
            </LinearGradient>
        </View>
    )
}

export default Ticket

const styles = StyleSheet.create({
    container: {
        height:'95%',
        marginBottom:30,
        marginHorizontal:10,
        width:'95%',
    },
    body:{
        height:'80%',
        flexDirection:'row',
        overflow:'hidden',
        backgroundColor:'#d7cff2',
        borderBottomLeftRadius:7,
        borderBottomRightRadius:7,
        elevation:0,
    },
    bodyLeft:{
        width:'70%',
        height:'100%',
        padding:10,
    },
    bodyRight:{
        paddingVertical:10,
        width:'30%',
        height:'100%',
        alignItems:'center',
                
    },
    gateHeader:{
        fontSize:15,
        fontWeight:'bold',
        color:'gray',
    },
    gateNumber:{
        fontSize:35,
        fontWeight:'bold',
        color:'black',
    },
    bodyTop:{
        height:'20%',
        width:'100%',
        flexDirection:'row',
        borderTopLeftRadius:7,
        borderTopRightRadius:7,
        overflow:'hidden',
        elevation:0,
        alignItems:'center',
        justifyContent:'flex-start',
        paddingHorizontal:10,
    },
    bodyLeftTop:{
        flexDirection:'row',
        justifyContent:'space-around',
        height:'60%',
        alignItems:'center',
    },
    fromLocation:{
        fontSize:20,
        fontWeight:'bold',
        color:'black',
    },
    toLocation:{
        fontSize:20,
        fontWeight:'bold',
        color:'black',
    },
    bodyLeftBottom:{
        alignItems:'flex-start',
        width:'100%',
        height:'40%',
    },
    DepartureContainer: {
        flexDirection:'row',
        justifyContent:'flex-start',
        width:'60%',
        paddingLeft:6,
    },
    DepartureTime:{
        paddingRight:10,
        fontSize:15,
        fontWeight:'bold',
        color:'black',
    },
    DepartureRemaining:{
        paddingRight:5,
        fontWeight:'bold',
        color:'gray',
    },
    DepartureRemainingTime:{
        fontWeight:'bold',
        color:'gray',
    },
    DepartureDate:{
        fontSize:15,
        fontWeight:'bold',
    },
    line:{
        borderColor: "black",
        borderWidth: 1,
        borderStyle: "dashed",
        borderRadius: 1,
        height:'100%',
        position:'absolute',
        left:'70%',
        elevation:0
    },
    status:{
        color:'#ffea42',
        fontWeight:'bold',
        fontSize:17,
        paddingLeft:10,
    },
    flightContainer:{
        width:'70%',
        alignItems:'flex-end',
    },
    flight:{
        fontSize:20,
        fontWeight:'bold',
        paddingRight:20,
    },
})

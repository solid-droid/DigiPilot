import { useNavigation } from '@react-navigation/core';
import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useSelector } from 'react-redux';


const Header = () => {


    const navigation = useNavigation();
    const {name} = useSelector(state => state.user);

    return (
        <View style={{
            flexDirection:'row',
             justifyContent:'space-between' ,
             paddingHorizontal:20,
             marginTop:0,
             alignItems:'center'
             }}>
            <TouchableOpacity style={{}} onPress={()=>
                    navigation.reset({
                        index: 0,
                        routes: [{name: 'Home', params: {reset:true}}],
                      })
            } activeOpacity={0.9}>
                <Text style={{fontSize:20, fontWeight:'bold', paddingLeft:0, marginTop:0}}>Hi {name}</Text>
                <Text style={{fontSize:15, paddingLeft:0, color:'gray'}}>Welcome to adani airport</Text>
            </TouchableOpacity>
            <Image 
            style={{
                width: 90, 
                height: 80,
                resizeMode: 'contain',

            }}
            source={require('../assets/adaniLogo.png')} />
        </View>
    )
}

export default Header

const styles = StyleSheet.create({})

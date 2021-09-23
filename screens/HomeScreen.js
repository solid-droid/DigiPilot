import React, { useState }  from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import Constants from "expo-constants"
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/NavOptions';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Input } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import MaskedView from "@react-native-community/masked-view";
import GradientText from '../widgets/GradientText';

const HomeScreen = () => {
    const [name, setName] = useState('');
    return (
        <LinearGradient  
        colors={['#f4eaff','#f2eeff','#def1ff','#def1ff','#e2f6ff']} 
        style={[styles.container]}>
            <View style={tw`p-1`}>
                <Image 
                style={[{
                    width: 100, 
                    height: 100,
                    resizeMode: 'contain',
                },tw`mx-auto`]}
                source={require('../assets/adaniLogo.png')} />
                <NavOptions></NavOptions>
                <View style={tw`mt-5 pl-5 pr-5`}>
                    <Input
                        placeholder="Enter Your Name"
                        leftIcon={{ type: 'font-awesome-5', name: 'user-alt', color: '#5A409B' }}
                        leftIconContainerStyle={{ paddingRight: 20 }}
                        onChangeText={value => setName(value)}
                        />
                    <Input
                        placeholder="Enter Flight Number"
                        leftIcon={{ type: 'font-awesome-5', name: 'plane',  color: '#5A409B' }}
                        leftIconContainerStyle={{ paddingRight: 18 }}
                        onChangeText={value => setName(value)}
                    />
                    <Input
                        placeholder="Date of Journey"
                        leftIcon={{ type: 'font-awesome-5', name: 'calendar-day',  color: '#5A409B' }}
                        leftIconContainerStyle={{ paddingRight: 25 }}
                        onChangeText={value => setName(value)}
                    />
                <TouchableOpacity style={styles.submitContainer}>
                    <GradientText style={styles.submitText}>adani air experience  </GradientText>
                    <Icon style={styles.iconStyle} name="arrow-right" size={25} color="#5A409B" />
                </TouchableOpacity>
                </View>
            </View>
        </LinearGradient>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        height: '100%'
    },
    submitContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        paddingTop:2,
    },
    submitText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#204aff',
        fontFamily: 'sans-serif-light',
    },
    iconStyle:{
        marginTop:2,
    }
});
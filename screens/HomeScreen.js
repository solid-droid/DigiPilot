import React, { useState, useEffect  }  from 'react'
import { Image, StyleSheet, Text, View, Keyboard ,Animated } from 'react-native'
import Constants from "expo-constants"
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/NavOptions';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Input } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';

import GradientText from '../widgets/GradientText';

const HomeScreen = () => {
    const [name, setName] = useState('');
    const [keyboardDown, setKeyboardDown] = useState(true);
    useEffect(() => {
        Keyboard.addListener('keyboardDidShow', _keyboardDidShow);
        Keyboard.addListener('keyboardDidHide', _keyboardDidHide);
    
        // cleanup function
        return () => {
          Keyboard.removeListener('keyboardDidShow', _keyboardDidShow);
          Keyboard.removeListener('keyboardDidHide', _keyboardDidHide);
        };
      }, []);
    
      const _keyboardDidShow = () => {
        setKeyboardDown(false);
      };
    
      const _keyboardDidHide = () => {
        setKeyboardDown(true);
      };
    
    return (
        <LinearGradient  
        colors={['#f4eaff','#f2eeff','#def1ff','#def1ff','#e2f6ff']} 
        style={[styles.container]}>
            <View>
                <View style={{alignItems:'center'}}>
                    <Image 
                    style={{
                        width: 100, 
                        height: 100,
                        resizeMode: 'contain',

                    }}
                    source={require('../assets/adaniLogo.png')} />
                </View>
                <View style={styles.slideTextContainer}>
                    <GradientText style={styles.slideText}>FUN</GradientText>
                    <GradientText style={styles.slideText}>SAFE</GradientText>
                    <GradientText style={styles.slideText}>SIMPLE</GradientText>
                </View>
                {keyboardDown ? <NavOptions styles={{display: "none"}}></NavOptions> : false}
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
    slideTextContainer: {
        height: 27,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    slideText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#204aff',
        fontFamily: 'sans-serif-light',
    },
    iconStyle:{
        marginTop:2,
    },

});
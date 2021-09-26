import React from 'react'
import {StyleSheet,View,Dimensions, Keyboard} from 'react-native'
import Constants from "expo-constants"
import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity } from 'react-native-gesture-handler';

import Ticket from '../components/Ticket';
import TicketMini from '../components/TicketMini';
import Header from '../components/Header';
import Menu from '../components/Menu';

import SearchItems from './SearchItems';


windowWidth = Dimensions.get('window').width;
windowHeight = Dimensions.get('window').height;

const MapScreens = ({navigation }) => {
    const [keyboardDown, setKeyboardDown] = React.useState(true);
    React.useEffect(() => {
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
        colors={['#f5edff','#f0edff','#edf1ff','#edf6ff','#edf9ff']} 
        style={[styles.container]}>
            <View>
                <Header/>
                <View>
                    <TouchableOpacity style={keyboardDown ?styles.ticketButton : styles.ticketMini} activeOpacity={0.8}
                    onPress={()=>navigation.navigate('Nav')}>
                     {keyboardDown ? <Ticket/> : <TicketMini/> }
                    </TouchableOpacity>
                    <SearchItems/>
                </View>
            </View>
            {/* <Menu/> */}
        </LinearGradient>
    )
}

export default MapScreens

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        height: '100%',
    },
    ticketButton:{
        width: windowWidth,
        height: windowHeight/4.5,
    },
    ticketMini:{
        width: windowWidth,
        height: windowHeight/6.5,
    },
});

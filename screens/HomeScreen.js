import React, { useState, useEffect}  from 'react'
import { Image, StyleSheet, Text, View, Keyboard ,Animated, Platform } from 'react-native'
import Constants from "expo-constants"
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/NavOptions';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Input } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import {useNavigation} from '@react-navigation/native'
import GradientText from '../widgets/GradientText';
import DateTimePicker  from '@react-native-community/datetimepicker';
import moment from 'moment';

import { setDateString, setFlight, setName } from '../redux/userData';
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';


const HomeScreen = ({navigation, route}) => {
    let reset = route?.params?.reset;
    const [showVlidator, setShowValidator] = useState(false);
    const {name, flight, dateString} = useSelector(state => state.user);
    const dispatch = useDispatch()

    const [show, setShow] = useState(false);
    const [date, setDate] = useState(new Date());

    const [keyboardDown, setKeyboardDown] = useState(true);

///////////////////////////////////////////////////

const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    const date = moment(currentDate).format('DD MMM YYYY');
    dispatch(setDateString(date));
    setDate(currentDate);
  };
    const checkUser = async () => {
        try {
            const value = await AsyncStorage.getItem('user');
            if (value) {
                const _json = JSON.parse(value);
                dispatch(setName(_json.name));
                dispatch(setDateString(_json.dateString));
                dispatch(setFlight(_json.flight));
                if(reset){
                    reset  = false
                } else {
                    adaniMode(_json.name, _json.flight, _json.dateString);
                }               
            } 
        } catch (e) {}
    }
  

    useEffect(() => {
        Keyboard.addListener('keyboardDidShow', _keyboardDidShow);
        Keyboard.addListener('keyboardDidHide', _keyboardDidHide);
        checkUser();
        // cleanup function
        return () => {
          Keyboard.removeListener('keyboardDidShow', _keyboardDidShow);
          Keyboard.removeListener('keyboardDidHide', _keyboardDidHide);
        };
      }, []);

      const storeData = async (value) => {
        try {
          const jsonValue = JSON.stringify(value)
          await AsyncStorage.setItem('user', jsonValue)
        } catch (e) {
          // saving error
        }
      }

      const adaniMode = async (_name = name, _flight = flight, _dateString = dateString ) => {
        if(_dateString && _dateString !== '' &&
           _name && _name !=='' && 
           _flight && _flight !== ''){
            await storeData({name :_name, flight: _flight, dateString : _dateString});
            navigation.reset({
                index: 0,
                routes: [{name: 'Map'}],
              });
        } else {
            setShowValidator(true);
        }
      }
    
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
                        value={name}
                        onChangeText={value => dispatch(setName(value))}
                        />
                    <Input
                        placeholder="Enter Flight Number"
                        leftIcon={{ type: 'font-awesome-5', name: 'plane',  color: '#5A409B' }}
                        leftIconContainerStyle={{ paddingRight: 18 }}
                        value={flight}
                        onChangeText={value => dispatch(setFlight(value))}
                    />
                    <TouchableOpacity style={styles.calendarContainer} onPress={()=>setShow(true)}>
                        <Icon style={styles.calendarIcon} name="calendar-day"  size={27} color="#5A409B" />
                        <Text style={styles.calendarText}>{dateString}</Text>
                    </TouchableOpacity>
                    
              {show && (
                    <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    minimumDate={new Date()}
                    mode={'date'}
                    display="spinner"
                    onChange={onChange}
                    />)}
                {showVlidator && <Text style={{color: 'red', position:'absolute', bottom:25, left:30}}>
                    Please fill all fields</Text>}
                <TouchableOpacity style={styles.submitContainer}  onPress={() => adaniMode()}>
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
        marginTop: 30,
        paddingLeft: 10,
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
    },
    calendarContainer:{
        marginHorizontal:10,
        flexDirection: 'row',
        alignItems: 'center',
        height: 50,
        borderBottomWidth: 1,
        borderColor:'#A4B3BF',
    },
    calendarText:{
        fontSize: 17,
        paddingLeft: 20,
        color:'#818C96',
    }

});
import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import Constants from "expo-constants"
import { StyleSheet, View , Dimensions} from 'react-native'
import Navigation from './Navigation'
import { TouchableOpacity } from 'react-native-gesture-handler'
import TicketMini from '../components/TicketMini'
import Header from '../components/Header';
import Food from '../components/Food'

windowWidth = Dimensions.get('window').width;
windowHeight = Dimensions.get('window').height;
const NavigateScreen = ({navigation, route}) => {
        
    const [item, setItem] = React.useState(null);

        React.useEffect(() => {
            if(route.params){
                if(route.params.item){
                    setItem(route.params.item);
                    return
                }
            }
            setItem(null)
        }, [route]);

       const goToComponent = () => {
           if(item){
            return(
                <View style={{
                      width: windowWidth,
                      height: windowHeight/7.5,
                      }}>
                      <Food img={item['image']} title={item.title} desc={item.desc} showBuy = {true}/>
              </View>)   
           } else return null

    }

    return (
<LinearGradient
        colors={['#f5edff','#f0edff','#edf1ff','#edf6ff','#edf9ff']} 
        style={[styles.container]}>
            <View>
                <Header/>
                <View>
                    <TouchableOpacity style={styles.ticketButton} activeOpacity={0.8}>
                        <TicketMini/>
                    </TouchableOpacity>
                    <View style={styles.navigatior}>
                        <Navigation goToComponent= {goToComponent()}/>
                    </View>
                </View>
            </View>
        </LinearGradient>
    )
}

export default NavigateScreen

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        height: '100%',
    },
    ticketButton:{
        width: windowWidth,
        height: windowHeight/7,
    },
    navigator:{

        width: windowWidth,
        height: windowHeight/2,
        marginTop: 100,
    }
})

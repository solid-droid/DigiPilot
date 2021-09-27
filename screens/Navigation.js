import React from 'react'
import { StyleSheet, View, Dimensions } from 'react-native'
import { WebView } from 'react-native-webview';
import Spinner from 'react-native-loading-spinner-overlay';
import { Icon, Overlay } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import OrderOnline from './OrderOnline';

windowHeight = Dimensions.get('window').height;
const Navigation = ({goToComponent}) => {
    const [webViewLoaded, setWebViewLoaded] = React.useState(false);
    const [visible, setVisible] = React.useState(false);

    return (
        <View style={styles.container}>
            <Spinner visible={!webViewLoaded} textContent={'Loading...'} textStyle={styles.spinnerTextStyle}/>
            {goToComponent && 
            <TouchableOpacity 
            style={styles.goToComponent}
            activeOpacity={0.8}
            onPress={() => setVisible(true)}
            >
                {goToComponent}
            </TouchableOpacity>
            }
            <WebView 
                source={{ uri: 'https://solid-droid.github.io/Simple3D' }}
                style={styles.WebViewContainer}
                onLoadEnd={() => setWebViewLoaded(true)}
            />
            <Overlay isVisible={visible} onBackdropPress={()=>setVisible(!visible)}>
                <OrderOnline />
            </Overlay>
        </View>
    )
}

export default Navigation

const styles = StyleSheet.create({

    WebViewContainer: {
        flex: 1,
    },
    container: {
        width: '100%',
        height: windowHeight/1.4 + windowHeight/18,
        top: 0,
        position: 'absolute',
    },
    spinnerTextStyle: {
        color: '#FFF',
      },
    goToComponent:{

      }
})

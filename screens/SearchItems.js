import React from 'react'
import { Animated, StyleSheet, Text, View, Dimensions } from 'react-native'
import { Input } from 'react-native-elements/dist/input/Input'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Food from '../components/Food'
import {useNavigation} from '@react-navigation/native'
import {search} from '../services/search'


windowWidth = Dimensions.get('window').width;
windowHeight = Dimensions.get('window').height;

const SearchItems = () => {
    const navigation = useNavigation();
    const fullList = [
        {
            title:'Starbucks', 
            desc:'Start the day with great taste' , 
            image:require('../assets/food/starbucks.jpg'),
            tags:['starbucks','coffee', 'hot drink'],
            showdefault:true,
        },
        {
            title:'Garret' ,
            desc:'Your Favorite Snack Is Finally Here!', 
            image:require('../assets/food/popcorn.jpg'),
            tags:['food', 'shop'],
            showdefault:true,
        },
        {
            title:'Burger King' , 
            desc:'Bite into tender juicy goodness', 
            image:require('../assets/food/burger.jpg'),
            tags:['burger','food'],
            showdefault:true,
        },
        {
            title:'Indian Silk Collections' , 
            desc:'Colors of Indian tradition', 
            image:require('../assets/gifts/saree.jpg'),
            tags:['clothes', 'shop', 'indian'],
            showdefault:true,
        },
        {
            title:'Spice Town' , 
            desc:'Feel the taste of Indian cuisine', 
            image:require('../assets/food/butterchicken.jpg'),
            tags:['indian', 'food'],
            showdefault:true,
        },
        {
            title:'Royalon' , 
            desc:'Because it’s special', 
            image:require('../assets/gifts/rings.jpg'),
            tags:['jewelry', 'shop'],
            showdefault:true,
        },
        {
            title:'Drinking Water' , 
            desc:'Get clean and fresh drinking water', 
            tags:['water'],
        },
        {
            title:'Washroom' , 
            desc:'Click here to navigate to washroom', 
            // image:require('../assets/gifts/rings.jpg'),
            tags:['toilet', 'water'],
        },
        {
            title:'Money Exchange' , 
            desc:'Atm and Currency Conversion', 
            tags:['money'],
        },
        {
            title:'Airport Taxi Service' , 
            desc:'Cheap and affordable Taxis', 
            tags:['taxi'],
        },
        {
            title:'Uber' , 
            desc:'Get Uber Taxis and deals', 
            tags:['taxi'],
        },

    ]
    
    const [list, setList] = React.useState(fullList.filter(item => item.showdefault));

    const searchValue = (value) => {
        const result = search(value);
        const newList = [];
        if (result.length > 0) {
            fullList.forEach((element, index) => {
                element.tags.forEach(tag => {
                    if(result.includes(tag)){
                        newList.push(index);
                    }
                })
            });
            setList(fullList.filter((item, index) => newList.includes(index)));
        } else {
            setList(fullList.filter(item => item.showdefault));
        }           
    }

    const beginNavigate = item => {
        navigation.navigate('Nav', {item})
    }

    return (
        <View style={{marginTop:0}}>
                    <Input
                        placeholder="Ask me something"
                        rightIcon={{ type: 'font-awesome-5', name: 'search',  color: '#5A409B' }}
                        onChangeText={value => searchValue(value)}
                    />
                    <Animated.FlatList data={list}
                                keyExtractor={(item, index) => index.toString()}
                                contentContainerStyle={{ paddingBottom: 30 }}
                                style={{width:windowWidth, height: windowHeight/1.6}}
                                renderItem={({item}) =>
                                                            (<TouchableOpacity style={styles.touchButton} activeOpacity={0.8}
                                                                onPress={()=>beginNavigate(item)}
                                                            >
                                                                <Food img={item['image']} title={item.title} desc={item.desc}/>
                                                            </TouchableOpacity>)} />
        </View>
    )
}

export default SearchItems

const styles = StyleSheet.create({
    touchButton:{
        width: windowWidth,
        height: windowHeight/7.3,
    },
})

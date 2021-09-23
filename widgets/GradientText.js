import React from "react";
import { Text } from "react-native";
import MaskedView from "@react-native-community/masked-view";
import { LinearGradient } from 'expo-linear-gradient';
    
const GradientText = (props) => {
  return (
    <MaskedView maskElement={<Text {...props} />}>
      <LinearGradient
        colors={['#BA3958','#832C8D','#3B50A1','#037BA0']} 
        start={{ x: 1, y: 1 }}
        end={{ x: 0, y: 0.33 }}
        style={{ flex: 1 }}
      >
        <Text {...props} style={[props.style, { opacity: 0 }]} />
      </LinearGradient>
    </MaskedView>
  );
};

export default GradientText;
import React from 'react';
import { View, Text, Image } from 'react-native';
import batLogo from "../../../assets/pictures/batman_logo.png"
import { styles } from './styles';

export function BatLogo() {
  return (
    <>
        <Text style={styles.title}>
            BAT PASS GENERATOR
        </Text>
        <Image style={{
            resizeMode: "contain",
            height: 180,
            marginVertical: 15
        }} source={batLogo}/>
    </>
  );
}
import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';

export default function CardsMeatsAndVegetables ({icon, text}) {

    return (
        <View>
            <Image source={icon}/>
            <Text>{text}</Text>
        </View>
    )
};

const styles = StyleSheet.create({

});

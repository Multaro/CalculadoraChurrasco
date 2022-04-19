import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';

export default function CardsMeatsAndVegetables (props) {

    return (
        <View>
            <Image source={props.icon}/>
            <Text>{props.text}</Text>
        </View>
    )
};

const styles = StyleSheet.create({

});
import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';

export default function CardsMeatsAndVegetables (props) {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={props.icon} style={styles.image}/>
            </View>
            <Text style={styles.label}>{props.text}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageContainer: {
        //width: '100px',
        //height: '100px'
    },
    image: {
        //objectFit: 'contain',
        //maxWidth: '100%',
        //maxHeight: '100%'
    },
    label: {
        fontSize: 14
    }
});

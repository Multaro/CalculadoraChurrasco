import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';

export default function CardsMeatsAndVegetables ({ text, icon, selected }) {
    return (
        <View style={styles.container}>
            <Image
                source={icon}
                style={selected ? styles.imageSelectedContainer : styles.imageContainer}
                imageStyle={styles.image}
            />
            <Text style={styles.label}>{text}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageSelectedContainer: {
        borderWidth: 1,
        borderColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '1%'
    },
    imageContainer: {
        //flex: 1,
        borderWidth: 1,
        borderColor: 'silver',
        //width: '100%',
        //height: '30%',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '1%'
    },
    image: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover'
    },
    label: {
        fontSize: 14,
        textShadowColor: 'rgba(0, 0, 0, .3)',
        textShadowOffset: { width: 0.5, height: 1 },
        textShadowRadius: 1
    }
});

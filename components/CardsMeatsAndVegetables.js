import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';

export default function CardsMeatsAndVegetables ({text, icon, selected}) {
    return (
        <View style={styles.container}>
            <View style={selected ? styles.imageSelectedContainer : styles.imageContainer}>
                <Image
                    source={icon}
                    style={styles.image}
                    resizeMode={'contain'}
                />
            </View>
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
        width: '100px',
        height: '100px',
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageContainer: {
        borderWidth: 1,
        borderColor: 'silver',
        width: '100px',
        height: '100px',
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: '50px',
        height: '50px'
    },
    label: {
        fontSize: 14,
        textShadowColor: 'rgba(0, 0, 0, .3)',
        textShadowOffset: { width: 0.5, height: 1 },
        textShadowRadius: 1
    }
});

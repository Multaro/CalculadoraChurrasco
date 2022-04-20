import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';

<<<<<<< HEAD
export default function CardsMeatsAndVegetables ({icon, text}) {

    return (
        <View>
            <Image source={icon}/>
            <Text>{text}</Text>
=======
export default function CardsMeatsAndVegetables (props) {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={props.icon} style={styles.image}/>
            </View>
            <Text style={styles.label}>{props.text}</Text>
>>>>>>> 3a3e70af815d83da5b4d2e1b4819e4fa742d0325
        </View>
    )
};

const styles = StyleSheet.create({
<<<<<<< HEAD

});
=======
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageContainer: {
        width: '100px',
        height: '100px'
    },
    image: {
        objectFit: 'contain',
        maxWidth: '100%',
        maxHeight: '100%'
    },
    label: {
        fontSize: 14
    }
});
>>>>>>> 3a3e70af815d83da5b4d2e1b4819e4fa742d0325

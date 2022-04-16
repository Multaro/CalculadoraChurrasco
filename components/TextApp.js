import React from 'react';
import {
    StyleSheet,
    Text,
} from 'react-native';

export default function TextApp ({text}) {
    return(
        <Text style={styles.font}>{text}</Text>
    );
}

const styles = StyleSheet.create({
    font: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#8e1616',
        //fontFamily: 'AnonymousPro-Regular',
        textShadowColor: 'rgba(0, 0, 0, .3)',
        textShadowOffset: { width: 0.5, height: 1 },
        textShadowRadius: 1
    },
});


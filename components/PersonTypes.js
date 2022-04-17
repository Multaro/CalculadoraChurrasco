import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image,
} from 'react-native';

import TextApp from './TextApp';

import colors from '../utils/colors';
import images from '../utils/images';

export default function PersonTypes({type, onSum, onSub, count}) {
    return (
        <View style={styles.container}>
            <TextApp text={type} />
            <TouchableOpacity 
                style={styles.buttonSection}
                onPress={onSum}
            >
                <View style={styles.button}>
                    <Text style={styles.text}>^</Text>
                </View>
            </TouchableOpacity>
                    
            <TextApp text={count} />

            <TouchableOpacity 
                style={styles.buttonSection}
                onPress={onSub}
            >
                <View style={styles.button}>
                    <Text style={styles.text}>^</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonSection: {
        width: '30%',
        backgroundColor: colors.black,
        aspectRatio: 1,
        padding: 7,
        marginVertical: 10
    },
    button: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#fff',
        backgroundColor: colors.black,
    },
    text: {
        textAlign: 'center',
        fontSize: 20,
        color: 'white'
    }
});

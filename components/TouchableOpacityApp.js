import React from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    Text,
    View
} from 'react-native';

import PropTypes from 'prop-types';

export default function TouchableOpacityApp({ text, onPress }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity 
                style={styles.button}
                onPress={onPress}
            >
                <Text style={styles.font}>{text}</Text>
            </TouchableOpacity>
        </View>
    );
}

TouchableOpacityApp.propTypes = {
    text: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
    container: {
        minWidth: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        height: 40,
        minWidth: '98%',
        backgroundColor: '#8e1616',
        justifyContent:'center',
        alignItems: 'center',
        borderRadius: 5
    },
    font: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#fff',
        textShadowColor: 'rgba(0, 0, 0, .3)',
        textShadowOffset: {width: 0.4, height: 1},
        textShadowRadius: 1
    }
});

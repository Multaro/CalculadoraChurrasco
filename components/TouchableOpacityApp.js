import React from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    Text
} from 'react-native';

export default class TouchableOpacityApp extends React.Component {
    render() {
        const { text, onPress } = this.props;

        return(
            <TouchableOpacity 
                style={styles.button}
                onPress={onPress}
            >
                <Text style={styles.font}>{text}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        height: 40,
        width: '80%',
        backgroundColor: '#8e1616',
        justifyContent:'center',
        alignItems: 'center'
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

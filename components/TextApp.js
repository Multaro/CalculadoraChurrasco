import React from 'react';
import {
    StyleSheet,
    Text,
} from 'react-native';

export default class TextApp extends React.Component {
    state = {

    };

    render() {
        const { text } = this.props;

        return(
            <Text style={styles.font}>{text}</Text>
        );
    }
}

const styles = StyleSheet.create({
    font: {
        fontSize: 20,
        color: '#8e1616',
        //fontFamily: 'AnonymousPro-Regular',
        textShadowColor: 'rgba(0, 0, 0, .3)',
        textShadowOffset: { width: 0.5, height: 1 },
        textShadowRadius: 1
    },
});


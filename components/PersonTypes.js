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

export default class PersonTypes extends React.Component {
    state = {
        count: 0
    };

    handleSumButton = () => {
        const { count } = this.state;
        const prevCount = count + 1;
        this.setState({count: prevCount});

    };

    handleSubButton = () => {
        const { count } = this.state;
        const prevCount = count - 1;

        if (prevCount < 0) return;
        
        this.setState({count: prevCount});
    };

    render() {
        const { count } = this.state;
        const { type } = this.props;

        return (
            <View style={styles.container}>
                <TextApp text={type} />
                      <View style={styles.buttonSection}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={this.handleSumButton}
                        >
                            <Text style={styles.text}>^</Text>
                        </TouchableOpacity>
                    </View>
                        
                        <TextApp text={count} />

                    <View style={styles.buttonSection}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={this.handleSubButton}
                        >
                            <Text style={styles.text}>^</Text>
                        </TouchableOpacity>

                    </View>
            </View>
        );
    }
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

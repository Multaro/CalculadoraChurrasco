import React from 'react';
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Text
} from 'react-native';

import colors from '../utils/colors';
import PropTypes from 'prop-types';

export default class SelectedButton extends React.Component {
    state = {
        selected: true
    }

    static propTypes = {
        text: PropTypes.string.isRequired,
        onPress: PropTypes.func.isRequired
    };
    
    handleSelected = () => {
        const { selected } = this.state;
        if (selected) {
            this.setState({ selected: false });
            return;
        }

        this.setState({ selected: true });
    };

    render() {
        const { text, onPress } = this.props;
        const { selected } = this.state;

        return (
            <View>
                {selected && (
                     <TouchableOpacity 
                         style={styles.container} 
                         onPress={onPress}
                         onPressOut={this.handleSelected}
                     >
                        <Text style={styles.font}>{text}</Text>
                    </TouchableOpacity>
               
                )}
                {!selected && (
                    <TouchableOpacity 
                        style={[styles.container, {backgroundColor: colors.red}]}
                        onPress={this.handleSelected}
                    >
                        <Text style={styles.fontSelected}>{text}</Text>
                    </TouchableOpacity>
                )}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: '33%',
        borderWidth: 1,
        borderColor: 'silver',
        padding: 10
    },
    font: {
        fontSize: 20,
        color: colors.red,
    },
    fontSelected: {
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold'
    }
});

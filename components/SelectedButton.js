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
        text: PropTypes.string.isRequired
    };
    
    handleSelected = meats => {
        const { selected } = this.state;
        if (selected) {
            this.setState({ selected: false }, () => {
                // MANIPULAR O OBJETO DOS
                // ALIMENTOS AQUI
                // ADCIONAR ALIMENTOS
                console.log(meats);
            });
            return;
        }
        this.setState({ selected: true }, () => {
            // RETIRAR ALIMENTOS
            console.log(meats);
        });
    };

    render() {
        const { text } = this.props;
        const { selected } = this.state;
        
        return (
            <View>
                {selected && (
                     <TouchableOpacity 
                         style={styles.container} 
                         onPress={() => this.handleSelected(text)}
                     >
                        <Text style={styles.font}>{text}</Text>
                    </TouchableOpacity>
               
                )}
                {!selected && (
                    <TouchableOpacity 
                        style={[styles.container, {backgroundColor: colors.red}]}
                        onPress={() => this.handleSelected(text)}
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
        flex: '1 1 21%',
        width: '200px',
        borderWidth: 1,
        borderColor: 'silver',
        padding: 10
    },
    font: {
        textAlign: 'center',
        fontSize: 14,
        color: colors.red,
    },
    fontSelected: {
        textAlign: 'center',
        fontSize: 14,
        color: '#fff'
    }
});

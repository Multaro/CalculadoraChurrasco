import React from 'react';
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Text
} from 'react-native';

import colors from '../utils/colors';
import data from '../utils/data';
import PropTypes from 'prop-types';

export default class SelectedButton extends React.Component {
    state = {
        selected: this.props.selected
    }

    static propTypes = {
        text: PropTypes.string.isRequired,
        meatType: PropTypes.string.isRequired
    };

    addFood(food) {
        const { meats } = data;
        const { meatType } = this.props;
        
        for (const meat in meats) {
            if (Object.hasOwnProperty.call(meats, meat)) {
                if (meat.label == food) {
                    return;
                }
            }
        }

        data.meats.push({
            label: food,
            type: meatType
        });
    }

    removeFood(food) {
        const { meatType } = this.props;
        const { meats } = data;

        let index = -1;
        for (var i = 0, len = meats.length; i < len; i++) {
            if (meats[i].label === food && meats[i].type == meatType) {
                index = i;
                break;
            }
        }

        if (index != -1) {
            meats.splice(index, 1);
        }

        data.meats = meats;
    }
    
    handleSelected = meats => {
        const { selected } = this.state;

        if (!selected) {
            this.setState({ selected: true }, () => {
                this.addFood(meats);
            });
            return;
        }
        this.setState({ selected: false }, () => {
            this.removeFood(meats);
        });
    };

    render() {

        const { text } = this.props;
        const { selected } = this.state;

        return (
            <View>
                {!selected && (
                     <TouchableOpacity 
                         style={styles.container} 
                         onPress={() => this.handleSelected(text)}
                     >
                        <Text style={styles.font}>{text}</Text>
                    </TouchableOpacity>
               
                )}
                {selected && (
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
        flex: .2,
        //width: '200px',
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

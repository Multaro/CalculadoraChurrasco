import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Text
} from 'react-native';

import colors from '../utils/colors';
import data from '../utils/data';

export default function SelectedButton ({text, id, onSelect, onUnselect, alreadySelected}) {

    const [selected, changeSelected] = useState(alreadySelected);

    const addFood = (food) => {
        const { meats } = data;
        
        for (const meat in meats) {
            if (Object.hasOwnProperty.call(meats, meat)) {
                if (meat.label == food) {
                    return;
                }
            }
        }

        data.meats.push({
            label: food,
            type: id
        });
    }

    const removeFood = (food) => {
        const { meats } = data;

        let index = -1;
        for (var i = 0, len = meats.length; i < len; i++) {
            if (meats[i].label === food && meats[i].type == id) {
                index = i;
                break;
            }
        }

        if (index != -1) {
            meats.splice(index, 1);
        }

        data.meats = meats;
    }
    
    const handleSelected = meats => {
        if (!selected) {
            changeSelected(true);

            addFood(meats)
        } else {
            changeSelected(false);

            removeFood(meats)
        }
    };
    
    return (
        <View style={styles.selectedButton}>
            {!selected && (
                <TouchableOpacity 
                    style={styles.container} 
                    onPress={() => handleSelected(text)}
                >
                    <Text style={styles.font}>{text}</Text>
                </TouchableOpacity>
            )}
            {selected && (
                <TouchableOpacity 
                    style={[styles.container, {backgroundColor: colors.red}]}
                    onPress={() => handleSelected(text)}
                >
                    <Text style={styles.fontSelected}>{text}</Text>
                </TouchableOpacity>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    selectedButton: {
        flex: 1,
        flexGrow: 1,
        flexBasis: 0,
        alignItems: 'center',
        padding: 20
    },
    container: {
        borderWidth: 1,
        borderColor: 'silver',
        padding: 10,
        width: '200px'
    },
    font: {
        textAlign: 'center',
        fontSize: 15,
        color: colors.red,
    },
    fontSelected: {
        textAlign: 'center',
        fontSize: 15,
        color: '#fff'
    }
});

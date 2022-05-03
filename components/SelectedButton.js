import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Text
} from 'react-native';

import colors from '../utils/colors';

export default function SelectedButton ({id, text, onSelect, onUnselect, alreadySelected}) {

    const [selected, changeSelected] = useState(alreadySelected);
    
    const handleSelected = meats => {
        if (!selected) {
            changeSelected(true);

            onSelect(meats, id)
        } else {
            changeSelected(false);

            onUnselect(meats, id)
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
        width: '100%',
        flexGrow: 1,
        //flexBasis: 1,
        //alignItems: 'center',
        padding: '2%'
    },
    container: {
        borderWidth: 1,
        borderColor: 'silver',
        padding: 10
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

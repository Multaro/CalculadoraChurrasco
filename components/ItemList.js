import React from 'react';
import {
    View,
    StyleSheet,
    Text
} from 'react-native';

import colors from '../utils/colors';

export default function ItemList({ id, value }) {
    return(
        <View style={styles.container}>
            <Text style={id}>ALCATRA</Text>
            <Text style={value}>0.05KG</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '2%',
    },
    text: {
        marginVertical: 1,
        color: colors.grey
    }
});

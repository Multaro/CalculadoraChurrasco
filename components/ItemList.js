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
            <Text style={styles.text}>{id}</Text>
            <Text style={styles.text}>{value}</Text>
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
        borderBottomWidth: 1,
        marginBottom: 8,
        borderBottomColor: 'rgba(117, 117, 177, .1)'

    },
    text: {
        marginVertical: 1,
        color: colors.grey
    }
});

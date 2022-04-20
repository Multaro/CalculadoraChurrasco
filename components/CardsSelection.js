import React from 'react';
import { 
    View,
    StyleSheet,
    FlatList
} from 'react-native';

import strings from '../utils/strings'
import data from '../utils/data';

import SelectedButton from './SelectedButton';

export default function CardsSelection ({texts}) {
    const types = texts.types.map((element, c) => {
        return {...element, id: c, type: element}
    });

    return (
        <View style={styles.container}>
            <FlatList 
                style={styles.wholeCard}
                data={types}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <SelectedButton text={item.type} />}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //width: '40%',
        padding: 20
    },
    wholeCard: {
        flex: 1,
        //flexDirection: 'row',
        //flexWrap: 'wrap',
        //justifyContent: 'space-between',
    }
});

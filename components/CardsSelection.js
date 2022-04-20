import React from 'react';
import { 
    View,
    StyleSheet,
    FlatList
} from 'react-native';

import data from '../utils/data'

import SelectedButton from './SelectedButton';

const meatAlreadySelected = (element, id) => {
    return data.meats.some(meat => meat.label === element && meat.type === id);
} 

export default function CardsSelection ({texts}) {

    const types = texts.types.map((element, c) => {
        return {...element, id: c, type: element, selected: meatAlreadySelected(element, texts.id)}
    });

    return (
        <View style={styles.container}>
            <FlatList 
                style={styles.wholeCard}
                horizontal={true}
                data={types}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <SelectedButton 
                    text={item.type}
                    meatType={texts.id}
                    selected={item.selected}
                />}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //width: '40%',
    },
    wholeCard: {
        flex: 1,
    }
});

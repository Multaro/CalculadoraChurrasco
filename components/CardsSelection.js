import React from 'react';
import { 
    FlatList,
    StyleSheet
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
        <FlatList
            style={styles.listStyle}
            contentContainerStyle={styles.contentContainer}
            numColumns={2}
            data={types}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <SelectedButton 
                text={item.type}
                meatType={texts.id}
                alreadySelected={item.selected}
            />}
        />
    );
};

const styles = StyleSheet.create({
    listStyle: {
        maxHeight: '40%'
    },
    contentContainer: {
        alignItems: 'center'
    }
})
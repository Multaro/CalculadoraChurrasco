import React from 'react';
import { 
    FlatList,
    StyleSheet,
    Text
} from 'react-native';

import SelectedButton from './SelectedButton';

export default function CardsSelection (texts = { key, id, type, selected, onSelect, onUnselect}) {
    return (
        <FlatList
            style={styles.listStyle}
            contentContainerStyle={styles.contentContainer}
            numColumns={2}
            data={texts.texts}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => <SelectedButton 
                id={item.key}
                text={item.type}
                onSelect={texts.onSelect}
                onUnselect={texts.onUnselect}
                alreadySelected={item.selected}
            />}
        />
    );
};

const styles = StyleSheet.create({
    listStyle: {
        flex: 1,
        width: '100%',
    },
    contentContainer: {
        flex: 1,
        //width: '100%',
    }
})

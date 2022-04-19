import React from 'react';
import { View, StyleSheet } from 'react-native';

import SelectedButton from './SelectedButton';

export default function CardsSelection (props) {

    let cards = [];
    props.texts.forEach(text => {
        cards.push(
            <SelectedButton text={text}/>
        );
    });

    return (
        <View style={styles.wholeCard}>
            {cards}
        </View>
    );
};

const styles = StyleSheet.create({
    wholeCard: {
        justifyContent: 'space-between',
        flex: 1,
        flexDirection: 'row'
    }
});
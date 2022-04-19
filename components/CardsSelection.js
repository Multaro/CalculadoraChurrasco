import React from 'react';
import { View, StyleSheet } from 'react-native';

import SelectedButton from './SelectedButton';

export default function CardsSelection (props) {

    let cards = [];
    props.texts.forEach(text => {
        cards.push(
            <SelectedButton key={text} text={text}/>
        );
    });

    return (
        <View style={styles.container}>
            <View style={styles.wholeCard}>
                {cards}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '40%',
        padding: 20
    },
    wholeCard: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        gap: '20px'
    }
});
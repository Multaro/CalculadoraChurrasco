import React from 'react';
import { View, StyleSheet } from 'react-native';

import strings from '../utils/strings'
import data from '../utils/data';

import SelectedButton from './SelectedButton';

export default function CardsSelection (props) {

    const { meats } = data;

    let cards = [];
    props.texts.forEach(text => {
        const meatFound = meats.find(meat => meat.label == text && meat.type == props.id);

        cards.push(
            <SelectedButton key={text} text={text} meatType={props.id} selected={meatFound}/>
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
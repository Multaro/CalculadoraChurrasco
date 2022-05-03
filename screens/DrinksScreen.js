import React from 'react';
import {
    Text,
    View,
    ImageBackground,
    StyleSheet,
    Image
} from 'react-native';

import TextApp from '../components/TextApp';

import colors from '../utils/colors';
import strings from '../utils/strings';
import images from '../utils/images';
import data from '../utils/data';

import CardsSelection from '../components/CardsSelection';
import TouchableOpacityApp from '../components/TouchableOpacityApp';

export default class DrinksScreen extends React.Component {

    addDrink = (drink, id) => {
        const { drinks } = data;

        drinks.forEach(addedDrink => {
            if (addedDrink == drink) return;
        });

        data.drinks.push({
            label: drink
        });
    }

    removeDrink = (drink, id) => {
        const { drinks } = data;

        let index = -1;
        for (let i = 0, len = drinks.length; i < len; i++) {
            if (drinks[i].label === drink) {
                index = i;
                break;
            }
        }

        if (index != -1) {
            drinks.splice(index, 1);
        }

        data.drinks = drinks;
    }

    render() {
        return (
            <ImageBackground
                source={images.background}
                style={styles.imageContainer}
                imageStyle={styles.image}
            >
                <View style={styles.background}>
                    <View style={styles.containerSection}>
                        <Image
                            style={{width: '60px', height: '60px'}}
                            source={images.GlassIcon}
                            imageStyle={styles.image}
                            resizeMode='contain'
                        />  

                        <TextApp text={strings.drinks.title}/>
                        <Text style={styles.text}>{strings.drinks.text}</Text>
                    </View>

                    <CardsSelection
                        texts={data.generateDrinks()}
                        onSelect={this.addDrink}
                        onUnselect={this.removeDrink}/>

                    <View style={styles.footerSection}>
                        <TouchableOpacityApp text={strings.next} />
                    </View>
                </View>
            </ImageBackground>
        );
    }
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: 40,
        backgroundColor: '#fff',
        borderRightWidth: 2,
        borderLeftWidth: 2,
        borderRightColor: colors.red,
        borderLeftColor: colors.red
    },
    imageContainer: {
        flex: 1,
        backgroundColor: 'rgba(1, 1, 1, .1)',
        paddingHorizontal: 20
    },
    image: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover'
    },
    containerSection: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        padding: 5
    },
    image: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover'
    },
    text: {
        marginVertical: 1,
        color: colors.grey
    },
    footerSection: {
        flex: .1,
        alignItems: 'center',
        justifyContent: 'flex-end'            
    }
});
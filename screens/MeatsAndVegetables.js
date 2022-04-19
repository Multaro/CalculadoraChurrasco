import React from 'react';
import {
    View,
    ImageBackground,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

import images from '../utils/images';
import colors from '../utils/colors';
import strings  from '../utils/strings'

import TextApp from '../components/TextApp';
import CardsSelection from '../components/CardsSelection';
import CardsMeatsAndVegetables from '../components/CardsMeatsAndVegetables';

export default class MeatsAndVegetables extends React.Component {
    state = {
        meats: {
            beef: true,
            pig: false,
            sheep: false,
            chicken: false,
            vegetables: false
        }
    };

    handleMeat = (key) => {

        let meats = this.state.meats;

        for (let meat in meats) {
            if (meat == key) {
                meats[meat] = true;
            } else {
                meats[meat] = false;
            }
        }

        this.setState({ meats: meats});
    }

    render() {
        const { 
            beef,
            pig,
            sheep,
            chicken,
            vegetables
        } = this.state.meats;

        const { meats } = strings;

        const icons = [];
        for (const key in this.state.meats) {
            if (Object.hasOwnProperty.call(this.state.meats, key)) {
                icons.push(key);
            }
        }

        return (
            <ImageBackground 
                source={images.background}
                style={styles.imageContainer}
                imageStyle={styles.image}
            >
                <View style={styles.background} onPress={this.handleSelectedButton}>
                    <TextApp text={meats.title}/>
                    <TouchableOpacity onPress={() => this.handleMeat('beef')}>
                        <CardsMeatsAndVegetables text={meats.beef.description}/>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.handleMeat('pig')}>
                        <CardsMeatsAndVegetables text={meats.pig.description}/>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.handleMeat('sheep')}>
                        <CardsMeatsAndVegetables text={meats.sheep.description}/>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.handleMeat('chicken')}>
                        <CardsMeatsAndVegetables text={meats.chicken.description}/>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.handleMeat('vegetables')}>
                        <CardsMeatsAndVegetables text={meats.vegetables.description}/>
                    </TouchableOpacity>

                    { beef && (
                        <CardsSelection texts={meats.beef.types} />
                    )}

                    { pig && (
                        <CardsSelection texts={meats.pig.types} />
                    )}

                    { sheep && (
                        <CardsSelection texts={meats.sheep.types} />
                    )}

                    { chicken && (
                        <CardsSelection texts={meats.chicken.types} />
                    )}

                    { vegetables && (
                        <CardsSelection texts={meats.vegetables.types} />
                    )}

                </View>

            </ImageBackground>
        );
    }
}

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
    }
});

import React from 'react';
import {
    View,
    ImageBackground,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

import images from '../utils/images';
import colors from '../utils/colors';
import strings from '../utils/strings'

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

        this.setState({ meats });
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
                <View style={styles.background} 
                    onPress={this.handleSelectedButton}
                >
                    <TextApp text={meats.title}/>
                    <View style={styles.meatTypes}>
                        <TouchableOpacity 
                            onPress={() => this.handleMeat(meats.beef.key)}
                        >
                            <CardsMeatsAndVegetables
                                text={meats.beef.description}
                                selected={beef}
                                icon={images.beefIcon}
                                />
                        </TouchableOpacity>

                        <TouchableOpacity 
                            onPress={() => this.handleMeat(meats.pig.key)}
                        >
                            <CardsMeatsAndVegetables
                                text={meats.pig.description}
                                selected={pig}
                                icon={images.pigIcon} />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => 
                            this.handleMeat(meats.sheep.key)}
                        >
                            <CardsMeatsAndVegetables
                                text={meats.sheep.description}
                                selected={sheep}
                                icon={images.sheepIcon} />
                        </TouchableOpacity>

                        <TouchableOpacity 
                            onPress={() => this.handleMeat(meats.chicken.key)}
                        >
                            <CardsMeatsAndVegetables
                                text={meats.chicken.description}
                                selected={chicken}
                                icon={images.chickenIcon} />
                        </TouchableOpacity>

                        <TouchableOpacity 
                            onPress={() => this.handleMeat(meats.vegetables.key)}
                        >
                            <CardsMeatsAndVegetables
                                text={meats.vegetables.description}
                                selected={vegetables}
                                icon={images.vegetableIcon} />
                        </TouchableOpacity>
                    </View>

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
    },
    meatTypes: {
        //border: '1px solid red',
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        //gap: 40,
        justifyContent: 'space-between',
        //width: '40%',
    }
});

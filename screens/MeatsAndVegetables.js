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
                                icon={meats.beef.icon}
                                />
                        </TouchableOpacity>

                        <TouchableOpacity 
                            onPress={() => this.handleMeat(meats.pig.key)}
                        >
                            <CardsMeatsAndVegetables
                                text={meats.pig.description}
                                selected={pig}
                                icon={meats.pig.icon} />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => 
                            this.handleMeat(meats.sheep.key)}
                        >
                            <CardsMeatsAndVegetables
                                text={meats.sheep.description}
                                selected={sheep}
                                icon={meats.sheep.icon} />
                        </TouchableOpacity>

                        <TouchableOpacity 
                            onPress={() => this.handleMeat(meats.chicken.key)}
                        >
                            <CardsMeatsAndVegetables
                                text={meats.chicken.description}
                                selected={chicken}
                                icon={meats.chicken.icon} />
                        </TouchableOpacity>

                        <TouchableOpacity 
                            onPress={() => this.handleMeat(meats.vegetables.key)}
                        >
                            <CardsMeatsAndVegetables
                                text={meats.vegetables.description}
                                selected={vegetables}
                                icon={meats.vegetables.icon} />
                        </TouchableOpacity>
                    </View>

                    { beef && (
                        <CardsSelection texts={meats.beef} />
                    )}

                    { pig && (
                        <CardsSelection texts={meats.pig} />
                    )}

                    { sheep && (
                        <CardsSelection texts={meats.sheep} />
                    )}

                    { chicken && (
                        <CardsSelection texts={meats.chicken} />
                    )}

                    { vegetables && (
                        <CardsSelection texts={meats.vegetables} />
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
        minWidth: '50%',
        maxWidth: '70%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 20,
        justifyContent: 'space-around',
        alignItems: 'center'
        //width: '40%',
    }
});

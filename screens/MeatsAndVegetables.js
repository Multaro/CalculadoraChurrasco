import React from 'react';
import {
    View,
    ImageBackground,
    StyleSheet,
    TouchableOpacity,
    Text,
} from 'react-native';

import images from '../utils/images';
import colors from '../utils/colors';
import strings from '../utils/strings';
import data from '../utils/data';

import TextApp from '../components/TextApp';
import CardsSelection from '../components/CardsSelection';
import CardsMeatsAndVegetables from '../components/CardsMeatsAndVegetables';
import TouchableOpacityApp from '../components/TouchableOpacityApp';

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

    addMeat = (food, type) => {

        const { meats } = data;
        
        for (const meat in meats) {
            if (Object.hasOwnProperty.call(meats, meat)) {
                if (meat.label === food && meat.type == type) {
                    return;
                }
            }
        }

        data.meats.push({
            label: food,
            type
        });
    }

    removeMeat = (meat, type) => {
        const { meats } = data;

        let index = -1;
        for (var i = 0, len = meats.length; i < len; i++) {
            if (meats[i].label === meat && meats[i].type == type) {
                index = i;
                break;
            }
        }

        if (index != -1) {
            meats.splice(index, 1);
        }

        data.meats = meats;
    }
    
    render() {
        const { 
            beef,
            pig,
            sheep,
            chicken,
            vegetables
        } = this.state.meats;
        const { navigation } = this.props;
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
                    <View style={{flex: 1}}>
                    { beef && (
                        <CardsSelection
                            texts={data.generateBeefs()}
                            onSelect={this.addMeat}
                            onUnselect={this.removeMeat}/>
                    )}

                    { pig && (
                        <CardsSelection 
                            texts={data.generatePigs()}
                            onSelect={this.addMeat}
                            onUnselect={this.removeMeat}/>
                    )}

                    { sheep && (
                        <CardsSelection 
                        texts={data.generateSheeps()}
                        onSelect={this.addMeat}
                        onUnselect={this.removeMeat}/>
                    )}

                    { chicken && (
                        <CardsSelection 
                        texts={data.generateChickens()}
                        onSelect={this.addMeat}
                        onUnselect={this.removeMeat}/>
                    )}

                    { vegetables && (
                        <CardsSelection 
                            texts={data.generateVegetables()}
                            onSelect={this.addMeat}
                            onUnselect={this.removeMeat}/>
                    )}
                        </View>

                    <View style={styles.nextButton}>
                        <TouchableOpacityApp 
                            text={strings.next}
                            onPress={() => navigation.navigate('Acompanhamentos')}
                        />
                    </View>
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        paddingVertical: 10,
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
        marginVertical: '10%',
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: '3%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    nextButton: {
        flex: .1,
        alignItems: 'center',
        justifyContent: 'flex-end'
    }
});

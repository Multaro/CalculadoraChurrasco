import React from 'react';
import {
    View,
    ImageBackground,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

import images from '../utils/images';
import colors from '../utils/colors';

import TextApp from '../components/TextApp';
import CardsSelection from '../components/CardsSelection';
import CardsMeatsAndVegetables from '../components/CardsMeatsAndVegetables';

export default class MeatsAndVegetables extends React.Component {
    state = {
        meats: {
            beef: true,
            pigMeat: false,
            sheepMeat: false,
            chickenMeat: false,
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
            pigMeat,
            sheepMeat,
            chickenMeat,
            vegetables
        } = this.state.meats;

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
                    <TextApp text='QUAIS CARNES E VEGETAIS SERÃO SERVIDOS?'/>
                    <TouchableOpacity onPress={() => this.handleMeat('beef')}>
                        <CardsMeatsAndVegetables text="CARNE BOVINA"/>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.handleMeat('pigMeat')}>
                        <CardsMeatsAndVegetables text="CARNE SUÍNA"/>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.handleMeat('sheepMeat')}>
                        <CardsMeatsAndVegetables text="CARNE OVINA"/>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.handleMeat('chickenMeat')}>
                        <CardsMeatsAndVegetables text="CARNE DE FRANGO"/>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.handleMeat('vegetables')}>
                        <CardsMeatsAndVegetables text="VEGETAIS"/>
                    </TouchableOpacity>

                    { beef && (
                        <CardsSelection texts={
                            [
                                'Alcatra',
                                'Contra Filé',
                                'Costela Bovina',
                                'Filé Mignon',
                                'Fraldinha',
                                'Maminha',
                                'Picanha'
                            ]
                        } />
                    )}

                    { pigMeat && (
                        <CardsSelection texts={
                            [
                                'Alcatra',
                                'Costela Suína',
                                'Linguiças frescas',
                                'Lombo',
                                'Picanha'
                            ]
                        } />
                    )}

                    { sheepMeat && (
                        <CardsSelection texts={
                            [
                                'Carré',
                                'Paleta',
                                'Pernil',
                                'Picanha de Cordeiro'
                            ]
                        } />
                    )}

                    { chickenMeat && (
                        <CardsSelection texts={
                            [
                                'Coração',
                                'Coxa',
                                'Coxa de asa',
                                'Peito',
                                'Sobrecoxa',
                                'Tulipa de frango'
                            ]
                        } />
                    )}

                    { vegetables && (
                        <CardsSelection texts={
                            [
                                'Abobrinha',
                                'Berinjela',
                                'Brócolis',
                                'Cebola',
                                'Cenoura',
                                'Cogumelo',
                                'Pimentão',
                                'Tomate'
                            ]
                        } />
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

import React from 'react';
import {
    View,
    ImageBackground,
    StyleSheet,
    Text,
    TouchableOpacity
} from 'react-native';

import images from '../utils/images';
import colors from '../utils/colors';

import TextApp from '../components/TextApp';
import SelectedButton from '../components/SelectedButton';

export default class MeatsAndVegetables extends React.Component {
    state = {
        beef: true,
        pigMeat: false,
        sheepMeat: false,
        chickenMeat: false,
        vegetables: false,
    };

    handleTeste = () => {
        const { beef, pigMeat } = this.state;
        if(beef) {
            this.setState({ beef: false });
            this.setState({ pigMeat: true });
            return;
        }
        this.setState({ beef: true });
        this.setState({ pigMeat: false });
    }

    render() {
        const { 
            beef,
            pigMeat,
            sheepMeat,
            chickenMeat,
            vegetables
        } = this.state;

        return (
            <ImageBackground 
                source={images.background}
                style={styles.imageContainer}
                imageStyle={styles.image}
            >
                <View style={styles.background} onPress={this.handleSelectedButton}>
                    <TextApp text='QUAIS CARNES E VEGETARIANOS SERÃO SERVIDOS?'/>
                    <TouchableOpacity onPress={this.handleTeste}>
                        <Text>AAAAAAAAAAAAA</Text>
                    </TouchableOpacity>

                    {beef && (
                        <View style={
                            {
                                justifyContent: 'space-between',
                                flex: 1
                            }}
                        >
                            <SelectedButton text='Alcatra' />
                            <SelectedButton text='Contra Filé' />
                            <SelectedButton text='Costela Bovina' />
                            <SelectedButton text='Filé Mignon' />
                            <SelectedButton text='Fraldinha' />
                            <SelectedButton text='Maminha' />
                            <SelectedButton text='Picanha' />
                        </View>
                    )}

                    {pigMeat && (
                        <View style={
                            {
                                justifyContent: 'space-between',
                                flex: 1
                            }}
                        >
                            <SelectedButton text='Alcatra' />
                            <SelectedButton text='Costela Suína' />
                            <SelectedButton text='Linguiças frescas' />
                            <SelectedButton text='Lombo' />
                            <SelectedButton text='Picanha' />
                        </View>
                    )}

                    {sheepMeat && (
                        <View style={
                            {
                                justifyContent: 'space-between',
                                flex: 1
                            }}
                        >
                            <SelectedButton text='Carré' />
                            <SelectedButton text='Paleta' />
                            <SelectedButton text='Pernil' />
                            <SelectedButton text='Picanha de Cordeiro' />
                        </View>
                    )}

                    {chickenMeat && (
                        <View style={
                            {
                                justifyContent: 'space-between',
                                flex: 1
                            }}
                        >
                            <SelectedButton text='Coração' />
                            <SelectedButton text='Coxa' />
                            <SelectedButton text='Coxa de asa' />
                            <SelectedButton text='Peito' />
                            <SelectedButton text='Sobrecoxa' />
                            <SelectedButton text='Tulipa de frango' />
                        </View>
                    )}

                    {vegetables && (
                        <View style={
                            {
                                justifyContent: 'space-between',
                                flex: 1
                            }}
                        >
                            <SelectedButton text='Abobrinha' />
                            <SelectedButton text='Berinjela' />
                            <SelectedButton text='Brócolis' />
                            <SelectedButton text='Cebola' />
                            <SelectedButton text='Cenoura' />
                            <SelectedButton text='Cogumelo' />
                            <SelectedButton text='Pimentão' />
                            <SelectedButton text='Tomate' />
                        </View>
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

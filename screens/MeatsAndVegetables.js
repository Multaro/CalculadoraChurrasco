import React from 'react';
import {
    View,
    ImageBackground,
    StyleSheet
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
    }

    render() {
        const { selected } = this.state;

        return (
            <ImageBackground 
                source={images.background}
                style={styles.imageContainer}
                imageStyle={styles.image}
            >
                <View style={styles.background} onPress={this.handleSelectedButton}>
                    <TextApp text='QUAIS CARNES E VEGETARIANOS SERÃO SERVIDOS?'/>
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

import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

import TextApp from '../components/TextApp';

import colors from '../utils/colors';
import strings from '../utils/strings';
import images from '../utils/images';

import CardsSelection from '../components/CardsSelection';
import TouchableOpacityApp from '../components/TouchableOpacityApp';

export default class DrinksScreen extends React.Component {
    render() {
        return (
            <View style={styles.background}>
                <View style={styles.containerSection}>
                    <Image
                        style={{width: '60px', height: '60px'}}
                        source={images.GlassIcon}
                        imageStyle={styles.image}
                        resizeMode='contain'
                    />  

                    <TextApp text='QUAIS BEBIDAS DESEJA SERVIR?'/>
                    <Text>Para ter certeza do sucesso do seu churrasco, escolha as bebidas
                        que não podem faltar e lembre de gelar bem antes de servir. Aprecie
                        com moderação.</Text>
                </View>

                <CardsSelection texts={strings.drinks} />

                <View style={styles.footerSection}>
                    <TouchableOpacityApp text='PRÓXIMO' />
                </View>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        paddingVertical: 40,
        backgroundColor: '#fff',
        borderRightWidth: 2,
        borderLeftWidth: 2,
        borderRightColor: colors.red,
        borderLeftColor: colors.render
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
    footerSection: {
        flex: .1,
        alignItems: 'center',
        justifyContent: 'flex-end'            
    }
});
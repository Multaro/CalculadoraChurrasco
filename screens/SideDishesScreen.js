import React from 'react';
import {
    StyleSheet,
    View,
    ImageBackground,
} from 'react-native';

import CardsSelection from '../components/CardsSelection';

import colors from '../utils/colors';
import images from '../utils/images';
import strings from '../utils/strings';

export default class SideDishesScreen extends React.Component {
    state = {

    };

    render() {

        return(
            <ImageBackground
                source={images.background}
                style={styles.imageContainer}
                imageStyle={styles.image}
            >
                <View style={styles.background}>
                    <CardsSelection texts={strings.sideDishes} />

                </View>

            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
   background: {
        flex: 1,
        paddingVertical: 40,
        backgroundColor: '#fff',
        borderRightWidth: 2,
        borderLeftWidth: 2,
        borderRightColor: colors.red,
        borderLeftColor: colors.red

    },
    // Container tamanho da screen
    imageContainer: {
        flex: 1,
        backgroundColor: 'rgba(1, 1, 1, .1)',
        paddingHorizontal: 20,
    },
    image: {
        // Imagem tamanho da screen
        flex: 1,
        width: null,
        height: null,
        // Redimensionar para cobrir a tela
        resizeMode: 'cover'
    }
});

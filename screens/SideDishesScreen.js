import React from 'react';
import {
    StyleSheet,
    View,
    ImageBackground,
    Text
} from 'react-native';

import CardsSelection from '../components/CardsSelection';
import TextApp from '../components/TextApp';
import TouchableOpacityApp from '../components/TouchableOpacityApp';

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
                    <View style={styles.container}>
                        <TextApp text='VOCÊ PENSOU EM QUAIS ACOMPANHAMENTOS?' /> 
                        <Text style={{color: colors.grey}}>Descobrir novos sabores é facil quando você pode contar com alguns acompanhamentos. Assim como a carne e os vegetais, eles são importantes para agradar os convidados e tornar o momento ainda mais especial.</Text>
                    
                    </View>
                    
                    <CardsSelection texts={strings.sideDishes} />
                    
                    <View style={styles.footerSection}>
                        <TouchableOpacityApp
                            text={'PRÓXIMO ->'}
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
        paddingHorizontal: 20
    },
    image: {
        // Imagem tamanho da screen
        flex: 1,
        width: null,
        height: null,
        // Redimensionar para cobrir a tela
        resizeMode: 'cover'
    },
    textSection: {
        padding: '5%',
        marginVertical: '10%',
        alignItems: 'center',
        justifyContent:'space-around'       
    },
    container: {
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: '5%',
        flex: 1
    },
    footerSection: {
        flex: .1,
        alignItems: 'center',
        justifyContent: 'flex-end'
    }
});

import React from 'react';
import {
    StyleSheet,
    ImageBackground,
    View,
    Text
} from 'react-native';

import colors from '../utils/colors';
import strings from '../utils/strings';
import images from '../utils/images';

import TextApp from '../components/TextApp';
import CardsSelection from '../components/CardsSelection';
import TouchableOpacityApp from '../components/TouchableOpacityApp';

export default class SuppliesScreen extends React.Component {
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
                        <TextApp text='NÃO ESQUEÇA DOS SUPRIMENTOS'/>
                        <Text>Não precisa de firula, mas o básico é essencial. Os suprimentos garantem um churrasco de respeito. Selecione tudo aquilo que precisa:</Text>
                    </View>
                    <CardsSelection texts={strings.supplies} />

                    <View style={styles.footerSection}>
                        <TouchableOpacityApp text='PRÓXIMO ->' />
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




import React from 'react';
import {
    View,
    StyleSheet,
    ImageBackground,
} from 'react-native';

import TextApp from './components/TextApp';
import TouchableOpacityApp from './components/TouchableOpacityApp';

export default class TypesAndNum extends React.Component {
    state = {
        text: '',
    };


    render() {
        return(
            <ImageBackground
                source={require('./assets/background-image.jpg')}
                style={styles.imageContainer}
                imageStyle={styles.image}
            >
                <View styles={styles.background}>
                    <View styles={styles.container}>
                        <TextApp text='QUANTAS PESSOAS VÃO AO CHURRA?' />
                    </View>

                    <View styles={styles.footer_container}>
                        <TouchableOpacityApp
                            text='PRÓXIMO ->'
                            onPress={() => console.log('Debbuger')}
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
        borderRightColor: '#8e1616',
        borderLeftColor: '#8e1616'

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
    },
    input: {
        padding: 5,
        width: '50%',
        textAlign: 'center',
    },
    container: {
        //marginTop: 60,
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    footer_container: {
        flex: .1,
        alignItems: 'center',
        justifyContent: 'flex-end'
    }

});

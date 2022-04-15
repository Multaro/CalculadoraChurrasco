import React from 'react';
import { 
    StyleSheet,
    View,
    ImageBackground,
} from 'react-native';

import TextApp from './components/TextApp';
import TouchableOpacityApp from './components/TouchableOpacityApp';

export default class App extends React.Component {
    state = {
        cont: 0,
    };

    handleButton = () => {
        const { cont } = this.state;
        const previousCont = cont;
        alert(`Teste state ${previousCont}`);

        this.setState({cont: previousCont + 1});
    };

    render() {

        return(
            <ImageBackground
                source={require('./assets/background-image.jpg')}
                style={styles.imageContainer}
                imageStyle={styles.image}
            >

                <View style={styles.container}>
                    <TextApp text='Calculadora Churrasco'/>

                    <TouchableOpacityApp
                        text='BOTÃO'
                        onPress={this.handleButton}
                    />
                </View>

            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
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
    }

});

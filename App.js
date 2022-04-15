import React from 'react';
import { 
    StyleSheet,
    View,
    ImageBackground,
    TextInput
} from 'react-native';

import TextApp from './components/TextApp';
import TouchableOpacityApp from './components/TouchableOpacityApp';

export default class App extends React.Component {
    state = {
        cont: 0,
        text: ''
    };

    handleButton = () => {
        const { cont } = this.state;
        const previousCont = cont;
        alert(`Teste state ${previousCont}`);

        this.setState({ cont: previousCont + 1 });
    };

    handleText = name => {
        const { text } = this.state;
        if (text.length == 14) name = `${text} ...`;
        if (text.length > 15) return;

        name = name.toUpperCase();
        this.setState({ text : name });
    }

    render() {
        const { text } = this.state;

        return(
            <ImageBackground
                source={require('./assets/background-image.jpg')}
                style={styles.imageContainer}
                imageStyle={styles.image}
            >

                <View style={styles.container}>
                    <TextApp text='DÊ UM NOME AO SEU CHURRASCO:'/>
                    <TextInput
                        style={styles.input}
                        placeholder='Ex: churras em casa'
                        underlineColorAndroid='black'
                        onChangeText={this.handleText}
                    />

                    <TouchableOpacityApp
                        text={`CRIAR ${text}`}
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
    },
    input: {
        padding: 5,
        width: '50%',
        textAlign: 'center',
    }
});

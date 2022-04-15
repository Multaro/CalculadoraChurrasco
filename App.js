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
        barbecue_name: ''
    };

    handleButton = () => {
        const { cont } = this.state;
        const previousCont = cont;
        alert(`Teste state ${previousCont}`);

        this.setState({ cont: previousCont + 1 });
    };

    handleBarbecueName = text => {
        const { barbecue_name } = this.state;
        if (barbecue_name.length == 14) text = `${text} ...`;
        if (barbecue_name.length > 15) return;

        text = text.toUpperCase();
        this.setState({ barbecue_name : text });
    }

    render() {
        const { barbecue_name } = this.state;

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
                        onChangeText={this.handleBarbecueName}
                    />

                    <TouchableOpacityApp
                        text={`CRIAR ${barbecue_name}`}
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

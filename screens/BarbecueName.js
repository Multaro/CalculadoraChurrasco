import React from 'react';
import { 
    StyleSheet,
    View,
    ImageBackground,
    TextInput
} from 'react-native';

import TextApp from '../components/TextApp';
import TouchableOpacityApp from '../components/TouchableOpacityApp';

import colors from'../utils/colors';

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
                source={require('../assets/background-image.jpg')}
                style={styles.imageContainer}
                imageStyle={styles.image}
            >

                <View style={styles.background}>
                    <View style={styles.containerSection}>
                        <TextApp text='DÊ UM NOME AO SEU CHURRASCO:'/>
                        <TextInput
                            style={styles.input}
                            placeholder='Ex: churras em casa'
                            underlineColorAndroid='black'
                            onChangeText={this.handleBarbecueName}
                        />
                    </View>

                    <View style={styles.footerSection}>
                        <TouchableOpacityApp
                            text={`CRIAR ${barbecue_name}`}
                            onPress={this.handleButton}
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
    containerSection: {
        //marginTop: 60,
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    footerSection: {
        flex: .1,
        alignItems: 'center',
        justifyContent: 'flex-end'   
    }
});


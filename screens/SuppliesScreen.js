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
import data from '../utils/data';

import TextApp from '../components/TextApp';
import CardsSelection from '../components/CardsSelection';
import TouchableOpacityApp from '../components/TouchableOpacityApp';

export default class SuppliesScreen extends React.Component {
    state = {

    };

    addSupply = (supply, id) => {
        const { supplies } = data;

        supplies.forEach(addedSupply => {
            if (addedSupply == supply) return;
        });

        data.supplies.push({
            label: supply
        });
    }

    removeSupply = (supply, id) => {
        const { supplies } = data;

        let index = -1;
        for (var i = 0, len = supplies.length; i < len; i++) {
            if (supplies[i].label === supply) {
                index = i;
                break;
            }
        }

        if (index != -1) {
            supplies.splice(index, 1);
        }

        data.supplies = supplies;
    }

    render() {
        const { navigation } = this.props;

        return(
            <ImageBackground
                source={images.background}
                style={styles.imageContainer}
                imageStyle={styles.image}
            >
                <View style={styles.background}>
                    <View style={styles.container}>
                        <TextApp text={strings.supplies.title}/>
                        <Text style={styles.text}>{strings.supplies.text}</Text>
                    </View>

                    <CardsSelection 
                        texts={data.generateSupplies()}
                        onSelect={this.addSupply}
                        onUnselect={this.removeSupply}/>

                    <View style={styles.footerSection}>
                        <TouchableOpacityApp 
                            text={strings.next}
                            onPress={navigation.navigate('Bebidas')}
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
    text: {
        fontFamily: 'Homenko',
        color: colors.grey,
        lineHeight: 20
    },
    footerSection: {
        flex: .1,
        alignItems: 'center',
        justifyContent: 'flex-end'            
    }
});




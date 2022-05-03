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
import data from '../utils/data';

export default class SideDishesScreen extends React.Component {
    state = {

    };

    addSideDishe = (sideDishe, id) => {
        const { sideDishes } = data;

        sideDishes.forEach(addedsideDishe => {
            if (addedsideDishe == sideDishe) return;
        });

        data.sideDishes.push({
            label: sideDishe
        });
    }

    removeSideDishe = (sideDishe, id) => {
        const { sideDishes } = data;

        let index = -1;
        for (var i = 0, len = sideDishes.length; i < len; i++) {
            if (sideDishes[i].label === sideDishe) {
                index = i;
                break;
            }
        }

        if (index != -1) {
            sideDishes.splice(index, 1);
        }

        data.sideDishes = sideDishes;
    }

    render() {

        return(
            <ImageBackground
                source={images.background}
                style={styles.imageContainer}
                imageStyle={styles.image}
            >
                <View style={styles.background}>
                    <View style={styles.container}>
                        <TextApp text={strings.sideDishes.title} /> 
                        <Text style={{color: colors.grey}}>{strings.sideDishes.text}</Text>
                    </View>
                    
                    <CardsSelection 
                        texts={data.generateSideDishes()}
                        onSelect={this.addSideDishe}
                        onUnselect={this.removeSideDishe}/>
                    
                    <View style={styles.footerSection}>
                        <TouchableOpacityApp
                            text={strings.next}
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

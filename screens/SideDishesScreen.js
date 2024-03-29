import React from 'react';
import {
    StyleSheet,
    View,
    ImageBackground,
    Text,
    Image,
    Dimensions
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
        const { navigation } = this.props;
        const win = Dimensions.get('window');

        return(
            <ImageBackground
                source={images.background}
                style={styles.imageContainer}
                imageStyle={styles.image}
            >
                <View style={styles.background}>
                    <View style={styles.container}>
                        <Image
                            style={{
                                width: win.width/5,
                                height: win.width/5,
                                resizeMode: "contain",
                                alignSelf: "center"
                            }}
                            source={images.sideDishesIcon}
                            imageStyle={styles.image}
                        /> 
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
                            onPress={() => navigation.navigate('Suprimentos')}
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
    imageContainer: {
        flex: 1,
        backgroundColor: 'rgba(1, 1, 1, .1)',
        paddingHorizontal: 20
    },
    image: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover'
    },
    container: {
        justifyContent: 'space-evenly',
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

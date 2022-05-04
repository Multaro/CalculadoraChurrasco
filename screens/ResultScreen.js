import React from 'react';
import {
    View,
    ImageBackground,
    Image,
    Text,
    StyleSheet
} from 'react-native';

import TextApp from '../components/TextApp';

import images from '../utils/images';
import colors from '../utils/colors';
import strings from '../utils/strings';

export default class Result extends React.Component {
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
                    <View style={styles.containerSection}>

                        <TextApp text={strings.result.title}/>
                        <Text style={styles.text}>NADA</Text>
                    </View>


                    <View style={styles.footerSection}>
                        <TouchableOpacityApp text={strings.next} />
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
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover'
    },
    containerSection: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        padding: 5
    },
    text: {
        color: colors.grey,
        lineHeight: 20
    },
    footerSection: {
        flex: .1,
        alignItems: 'center',
        justifyContent: 'flex-end'            
    }
});

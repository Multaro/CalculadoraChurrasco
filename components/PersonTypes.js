import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image,
    Dimensions
} from 'react-native';

import TextApp from './TextApp';

import colors from '../utils/colors';
import images from '../utils/images';
import PropTypes from 'prop-types';


const win = Dimensions.get('window');

export default function PersonTypes({type, onSum, onSub, count, typeIcon}) {
    
    return (
        <View style={styles.container}>
            <Image 
                style={{
                    width: win.width/5,
                    height: win.width/5,
                    resizeMode: "contain",
                    alignSelf: "center",
                }}
                source={typeIcon} 
                imageStyle={styles.Image}
            />
            <TextApp text={type} />
            <TouchableOpacity 
                style={styles.buttonSection}
                onPress={onSum}
            >
                <View style={styles.button}>
                    <Text style={styles.text}>↑</Text>
                </View>
            </TouchableOpacity>
                    
            <TextApp text={`${count}`} />

            <TouchableOpacity 
                style={styles.buttonSection}
                onPress={onSub}
            >
                <View style={styles.button}>
                    <Text style={styles.text}>↓</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

PersonTypes.propTypes = {
    type: PropTypes.string,
    onSum: PropTypes.func.isRequired,
    onSub: PropTypes.func.isRequired,
    count: PropTypes.number.isRequired,
    typeIcon: PropTypes.any
};

PersonTypes.defaultProps = {
    type: '',
    typeIcon: 0
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    buttonSection: {
        width: '30%',
        backgroundColor: colors.black,
        aspectRatio: 1,
        padding: 7,
        marginVertical: 10
    },
    button: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        textAlign: 'center',
        fontSize: 20,
        color: 'white'
       
    },
    image: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover'
    }
});

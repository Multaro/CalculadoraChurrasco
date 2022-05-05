import React from 'react';
import {
    View,
    ImageBackground,
    Image,
    Text,
    ScrollView,
    StyleSheet,
    FlatList
} from 'react-native';

import TextApp from '../components/TextApp';
import TouchableOpacityApp from '../components/TouchableOpacityApp';

import images from '../utils/images';
import colors from '../utils/colors';
import strings from '../utils/strings';
import data from '../utils/data';
import { fetchBarbecue } from '../utils/api';
import ItemList from '../components/ItemList';

export default class Result extends React.Component {
    state = {
        loading: false,
        error: false,
        sideDishes: false,
        supplies: false,
        drinks: false
    };

    componentDidMount() {
        const guests = data.guests;
        const sideDishes = data.sideDishes.map(sideDishe => sideDishe.label);
        const meats = data.meats.map(meat => meat.label);
        const supplies = data.supplies.map(supplie => supplie.label);
        const drinks = data.drinks.map(drink => drink.label);

        const obj = {
            convidados: guests,
            meats,
            sideDishes,
            supplies,
            drinks
        };

        this.handleBarbecue(obj);
    }

    handleBarbecue = async data => {

        if (!data) return;

        this.setState({ loading: true }, async () => {
            try {
                
                const result = await fetchBarbecue(data);
                console.log(result);
                this.setState({
                    loading: false,
                    error: false,
                });

            } catch (e) {
                console.log(e);
                this.setState({
                    loading: false,
                    error: true
                });
            }
        });
    };

    render() {
        const { 
            loading,
            error,
            sideDishes,
            supplies,
            drinks
        } = this.state;

        return(
            <ImageBackground
                source={images.background}
                style={styles.imageContainer}
                imageStyle={styles.image}
            >
                <View style={styles.background}>
                    {!loading && (
                        <View style={styles.containerSection}>
                            <TextApp text={strings.result.title} />
                            {error && (
                                <Text>
                                    Falha ao realizar calculo, verifique a 
                                    conexão com a internet.
                                </Text>
                            )}
                            {!error && (
                                <ScrollView style={styles.scrollView}>
                                    <TextApp text='CONVIDADOS' />
                                    <View style={styles.scrollSection}>
                                        <View>
                                            <Image
                                                source={images.mensIcon}
                                                imageStyle={styles.image}
                                                resizeMode='contain'
                                            />
                                            <TextApp text='00' />
                                        </View>

                                        <View>
                                            <Image
                                                source={images.womansIcon}
                                                imageStyle={styles.image}
                                                resizeMode='contain'
                                            />
                                            <TextApp text='00' />
                                        </View>

                                        <View>
                                            <Image
                                                source={images.ChildsIcon}
                                                imageStyle={styles.image}
                                                resizeMode='contain'
                                            />
                                            <TextApp text='00' />
                                        </View>
                                    </View>
                                    <TextApp text='Carnes e Vegetais' />
                                    {sideDishes && (
                                        <View>
                                        {
                                            // FLAT LIST
                                        }  
                                        </View>
                                    )}

                                    {supplies && (
                                        <View>
                                        {
                                            // FLAT LIST
                                        }  
                                        </View>
                                    )}

                                    {drinks && (
                                        <View>
                                        {
                                            // FLAT LIST
                                        }  
                                        </View>
                                    )}

                                </ScrollView>
                            )}
                        </View>
                    )}

                    <View style={styles.footerSection}>
                        <TouchableOpacityApp 
                            text={strings.next}
                            onPress={() => ''}
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
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover'
    },
    containerSection: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: 'pink',
        padding: 5
    },
    text: {
        color: colors.grey,
        lineHeight: 20
    },
    scrollView: {
        width: '100%',
        backgroundColor: 'red'
    },
    scrollSection: {
        flexDirection: 'row',
        backgroundColor: 'blue',
        justifyContent: 'center'
    },
    footerSection: {
        flex: .1,
        alignItems: 'center',
        justifyContent: 'flex-end'            
    }
});

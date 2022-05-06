import React from 'react';
import {
    View,
    ImageBackground,
    Image,
    Text,
    ScrollView,
    StyleSheet,
    ActivityIndicator,
    StatusBar
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
        drinks: false,
        meatsList: {},
        sideDishesList: {},
        suppliesList: {},
        drinksList: {}
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

    newBarbecue = () => {
        const { navigation } = this.props;

        data.newBarbecue();

        navigation.navigate('Churrasco', {
            reseting: true
        });
    }

    handleBarbecue = async data => {

        if (!data) return;

        this.setState({ loading: true }, async () => {
            try {
                
                const result = await fetchBarbecue(data);
                const sideDishes = (!data.sideDishes.length == 0) ? true: false;
                const supplies = (!data.supplies.length == 0) ? true: false;
                const drinks = (!data.drinks.length == 0) ? true: false;


                this.setState({
                    loading: false,
                    error: false,
                    sideDishes,
                    supplies,
                    drinks,
                    meatsList: result.meats,
                    sideDishesList: result.sideDishes,
                    suppliesList: result.supplies,
                    drinksList: result.drinks
                });

            } catch (e) {
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
            drinks,
            meatsList,
            sideDishesList,
            suppliesList,
            drinksList
        } = this.state;

        return(
            <View style={{flex: 1}}>
                {loading && (
                    <View style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center'}}>
                        <ActivityIndicator
                            animating={loading}
                            size='large'
                            color={colors.red}
                        />
                    </View>
                )}

            {!loading && (
                <ImageBackground
                    source={images.background}
                    style={styles.imageContainer}
                    imageStyle={styles.image}
                >
                    <View style={styles.background}>
                        <View style={styles.containerSection}>
                            <TextApp text={`${data.getBarbecueName()}`} />
                            <TextApp text={data.getEventDate()} />
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
                                            <TextApp text={`${data.guests.men}`} />
                                        </View>

                                        <View>
                                            <Image
                                                source={images.womansIcon}
                                                imageStyle={styles.image}
                                            />
                                            <TextApp text={`${data.guests.women}`} />
                                        </View>

                                        <View>
                                            <Image
                                                source={images.ChildsIcon}
                                                imageStyle={styles.image}
                                                resizeMode='contain'
                                            />
                                            <TextApp text={`${data.guests.children}`} />
                                        </View>
                                    </View>
                                    <View style={{alignItems: 'center'}}>
                                        <Image
                                            source={images.meatsIcon}
                                            imageStyle={styles.image}
                                            resizeMode='contain'
                                        />
                                    </View>
                                    <TextApp text='Carnes e Vegetais' />
                                    {Object.keys(meatsList).map(item => {
                                        return(
                                            <ItemList 
                                                key={item}
                                                id={item}
                                                value={meatsList[item]}
                                            />
                                        );
                                    })}

                                    {sideDishes && (
                                        <View>
                                            <View style={{alignItems: 'center'}}>
                                                <Image
                                                    source={images.sideDishesIcon}
                                                    imageStyle={styles.image}
                                                    resizeMode='contain'
                                                />
                                            </View>

                                            <TextApp text='Acompanhamentos' />
                                            {Object.keys(sideDishesList).map(item => {
                                                return(
                                                    <ItemList 
                                                        key={item}
                                                        id={item}
                                                        value={sideDishesList[item]}
                                                    />
                                                );
                                            })}
                                        </View>
                                    )}

                                    {supplies && (
                                        <View>
                                            <View style={{alignItems: 'center'}}>
                                                <Image
                                                    source={images.suppliesIcon}
                                                    imageStyle={styles.image}
                                                    resizeMode='contain'
                                                />
                                            </View>

                                            <TextApp text='Suprimentos' />
                                            {Object.keys(suppliesList).map(item => {
                                                return(
                                                    <ItemList 
                                                        key={item}
                                                        id={item}
                                                        value={suppliesList[item]}
                                                    />
                                                );
                                            })}  
                                        </View>
                                    )}

                                    {drinks && (
                                        <View>
                                            <View style={{alignItems: 'center'}}>
                                                <Image
                                                    source={images.GlassIcon}
                                                    imageStyle={styles.image}
                                                    resizeMode='contain'
                                                />
                                            </View>
                                            <TextApp text='Bebidas' />
                                            {Object.keys(drinksList).map(item => {
                                                return(
                                                    <ItemList 
                                                        key={item}
                                                        id={item}
                                                        value={drinksList[item]}
                                                    />
                                                );
                                            })}  
                                        </View>
                                    )}

                                </ScrollView>
                            )}
                        </View>

                        <View style={styles.footerSection}>
                            <TouchableOpacityApp 
                                text={'INICIAR OUTRO CALCULO'}
                                onPress={this.newBarbecue}
                            />
                        </View>
                   </View>
                </ImageBackground>
            )}
            </View>
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
        resizeMode: 'cover',
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
    scrollView: {
        width: '100%',
    },
    scrollSection: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    footerSection: {
        flex: .1,
        alignItems: 'center',
        justifyContent: 'flex-end'            
    }
});

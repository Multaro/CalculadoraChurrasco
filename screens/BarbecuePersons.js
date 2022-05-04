import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    ImageBackground,
    Image
} from 'react-native';

import TextApp from '../components/TextApp';
import TouchableOpacityApp from '../components/TouchableOpacityApp';
import PersonTypes from '../components/PersonTypes';

import colors from '../utils/colors';
import images from '../utils/images';
import data from '../utils/data';
import strings from '../utils/strings';

export default class BarbecuePersons extends React.Component {
    state = {
        countMens: data.guests.men,
        countWomens: data.guests.women,
        countChilds: data.guests.children,
        countVegan: data.guests.vegs,
        countTotal: data.getTotalPeople()
    };

    handleCountTotal = bool => {
        const { countTotal } = this.state;

        if (bool) {
            const total = countTotal + 1;
            this.setState({ countTotal: total });
            return;
        }

        const total = countTotal - 1;
        this.setState({ countTotal: total });
    };

    handleSumButtonMens = () => {
        const { countMens } = this.state;
        const prevCount = countMens + 1;
        this.setState({ countMens: prevCount }, this.handleCountTotal(true));

        data.addMen();
    };

    handleSubButtonMens = () => {
        const { countMens } = this.state;
        if (countMens === 0) return;
        const prevCount = countMens - 1;
        this.setState({ countMens: prevCount }, this.handleCountTotal(false));

        data.subMen();
    };

    handleSumButtonWomens = () => {
        const { countWomens } = this.state;
        const prevCount = countWomens + 1;
        this.setState({ countWomens: prevCount }, this.handleCountTotal(true));

        data.addWomen();
    };

    handleSubButtonWomens = () => {
        const { countWomens } = this.state;
        if (countWomens === 0) return;
        const prevCount = countWomens - 1;
        this.setState({ countWomens: prevCount }, this.handleCountTotal(false));

        data.subWomen();
    };

    handleSumButtonChilds = () => {
        const { countChilds } = this.state;
        const prevCount = countChilds + 1;
        this.setState({ countChilds: prevCount }, this.handleCountTotal(true));

        data.addChildren();
    };

    handleSubButtonChilds = () => {
        const { countChilds } = this.state;
        if (countChilds === 0) return;
        const prevCount = countChilds - 1;
        this.setState({ countChilds: prevCount }, this.handleCountTotal(false));

        data.subChildren();
    };

    handleSumButtonVegan = () => {
        const { countVegan, countTotal } = this.state;
        if (countVegan >= countTotal) return;
        const prevCount = countVegan + 1;
        this.setState({ countVegan: prevCount });

        data.addVegetarian();
    };

    handleSubButtonVegan = () => {
        const { countVegan } = this.state;
        if (countVegan === 0) return;
        const prevTotal = countVegan - 1;
        this.setState({ countVegan: prevTotal });

        data.subVegetarian();
    };
    
    render() {
        const { 
            countMens,
            countWomens,
            countChilds,
            countVegan,
            countTotal
        } = this.state;
        const { navigation } = this.props;

        return(
            <ImageBackground
                source={images.background}
                style={styles.imageContainer}
                imageStyle={styles.image}
            >
                <View style={styles.background}>
                    <View style={styles.containerSection}>
                        <Image 
                            //style={{width: '100%', height: '100%'}}
                            source={images.reunionIcon}
                            imageStyle={styles.image}
                        />
                        <TextApp text={`QUANTAS PESSOAS VÃO AO ${data.getBarbecueName()}?`} />

                        <View style={styles.personSection}>
                            <PersonTypes 
                                type='HOMENS'
                                onSum={this.handleSumButtonMens}
                                onSub={this.handleSubButtonMens}
                                count={countMens}
                                typeIcon={images.mensIcon}
                            />
                            <PersonTypes 
                                type='MULHERES'
                                onSum={this.handleSumButtonWomens}
                                onSub={this.handleSubButtonWomens}
                                count={countWomens}
                                typeIcon={images.womansIcon}
                            />
                            <PersonTypes 
                                type='CRIANÇAS'
                                onSum={this.handleSumButtonChilds}
                                onSub={this.handleSubButtonChilds}
                                count={countChilds}
                                typeIcon={images.ChildsIcon}
                            />
                        </View>
                        <View 
                            style={{
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'center',
                                flexDirection: 'row'
                            }}
                        >
                            <View style={{flex: 1, alignItems: 'center'}}>
                                <TextApp text='QUANTOS VEGETARIANOS' />
                                <Text>
                                    {`Selecione até ${countTotal} pessoas`}
                                </Text>
                            </View>
                            <View style={{flex: .7}}>
                                <PersonTypes
                                    type=''
                                    onSum={this.handleSumButtonVegan}
                                    onSub={this.handleSubButtonVegan}
                                    count={countVegan}
                                />
                            </View>
                        </View>
                    </View>

                    <View style={styles.footerSection}>
                        <TouchableOpacityApp
                            text={strings.next}
                            onPress={() => navigation.navigate('Carnes')}
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
        paddingHorizontal: 20,
    },
    // Container tamanho da screen
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
    personSection: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: '10%'
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
        justifyContent: 'center'
    }

});

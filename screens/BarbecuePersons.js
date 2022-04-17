import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    ImageBackground,
} from 'react-native';

import TextApp from '../components/TextApp';
import TouchableOpacityApp from '../components/TouchableOpacityApp';
import PersonTypes from '../components/PersonTypes';

import colors from '../utils/colors';
import images from '../utils/images';

export default class BarbecuePersons extends React.Component {
    state = {
        countMens: 0,
        countWomens: 0,
        countChilds: 0,
        countVegan: 0,
        countTotal: 0
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
    };

    handleSubButtonMens = () => {
        const { countMens } = this.state;
        if (countMens === 0) return;
        const prevCount = countMens - 1;
        this.setState({ countMens: prevCount }, this.handleCountTotal(false));
    };

    handleSumButtonWomens = () => {
        const { countWomens } = this.state;
        const prevCount = countWomens + 1;
        this.setState({ countWomens: prevCount }, this.handleCountTotal(true));
    };

    handleSubButtonWomens = () => {
        const { countWomens } = this.state;
        if (countWomens === 0) return;
        const prevCount = countWomens - 1;
        this.setState({ countWomens: prevCount }, this.handleCountTotal(false));
    };

    handleSumButtonChilds = () => {
        const { countChilds } = this.state;
        const prevCount = countChilds + 1;
        this.setState({ countChilds: prevCount }, this.handleCountTotal(true));
    };

    handleSubButtonChilds = () => {
        const { countChilds } = this.state;
        if (countChilds === 0) return;
        const prevCount = countChilds - 1;
        this.setState({ countChilds: prevCount }, this.handleCountTotal(false));
    };

    handleSumButtonVegan = () => {
        const { countVegan, countTotal } = this.state;
        if (countVegan >= countTotal) return;
        const prevCount = countVegan + 1;
        this.setState({ countVegan: prevCount });
    };

    handleSubButtonVegan = () => {
        const { countVegan } = this.state;
        if (countVegan === 0) return;
        const prevTotal = countVegan - 1;
        this.setState({ countVegan: prevTotal });
    };

    
    render() {
        const { 
            countMens,
            countWomens,
            countChilds,
            countVegan,
            countTotal
        } = this.state;

        return(
            <ImageBackground
                source={images.background}
                style={styles.imageContainer}
                imageStyle={styles.image}
            >
                <View style={styles.background}>
                    <View style={styles.containerSection}>
                        <TextApp text='QUANTAS PESSOAS VÃO AO CHURRA?' />

                        <View style={styles.personSection}>
                            <PersonTypes 
                                type='HOMENS'
                                onSum={this.handleSumButtonMens}
                                onSub={this.handleSubButtonMens}
                                count={countMens}
                            />
                            <PersonTypes 
                                type='MULHERES'
                                onSum={this.handleSumButtonWomens}
                                onSub={this.handleSubButtonWomens}
                                count={countWomens}
                            />
                            <PersonTypes 
                                type='CRIANÇAS'
                                onSum={this.handleSumButtonChilds}
                                onSub={this.handleSubButtonChilds}
                                count={countChilds}
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
                            text='PRÓXIMO ->'
                            onPress={() => console.log('Debbuger')}
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
        alignItems: 'center'
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

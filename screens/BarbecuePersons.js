import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    ImageBackground,
    Image,
    Dimensions
} from 'react-native';

import TextApp from '../components/TextApp';
import TouchableOpacityApp from '../components/TouchableOpacityApp';
import PersonTypes from '../components/PersonTypes';
import ModalDataInvalid from '../components/ModalDataInvalid';

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
        countTotal: data.getTotalPeople(),
        modalVisible: false,
        fieldNotFullfiled: ''
    };

    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
    }

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

    handleNextButton = () => {
        const { countTotal } = this.state;

        if (countTotal == 0) {
            let field = 'pelo menos uma pessoa';

            this.setState({ fieldNotFullfiled: field });
            this.setModalVisible(true);
            return;
        }

        const { navigation } = this.props;

        navigation.navigate('Carnes');
    }
    
    render() {
        const { 
            countMens,
            countWomens,
            countChilds,
            countVegan,
            countTotal,
            modalVisible,
            fieldNotFullfiled
        } = this.state;
        const win = Dimensions.get('window');

        return(
            <ImageBackground
                source={images.background}
                style={styles.imageContainer}
                imageStyle={styles.image}
            >
                <View style={styles.background}>
                    <ModalDataInvalid
                        animationType='slide'
                        visible={modalVisible}
                        onModalClose={this.setModalVisible}
                        fieldNotFullfiled={fieldNotFullfiled}
                    />

                    <View style={styles.containerSection}>
                        <Image 
                            style={{
                                width: win.width/5,
                                height: win.width/5,
                                resizeMode: "contain",
                                alignSelf: "center",
                            }}
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
                            <View style={{
                                flex: 1}}>
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
                            onPress={this.handleNextButton}
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
    image: {
        flex: 1,
        width: null,
        height: null,
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
        marginTop: '20%',
    },
    containerSection: {
        flex: 1,
        //justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    footerSection: {
        flex: .1,
        alignItems: 'center',
        justifyContent: 'flex-start'
    }

});

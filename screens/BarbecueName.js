import React from 'react';
import { 
    StyleSheet,
    View,
    ImageBackground,
    TextInput,
    ScrollView,
    Dimensions
} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker/CalendarPicker';

import TextApp from '../components/TextApp';
import TouchableOpacityApp from '../components/TouchableOpacityApp';
import ModalDataInvalid from '../components/ModalDataInvalid';

import colors from '../utils/colors';
import images from '../utils/images';
import data from '../utils/data';

export default class App extends React.Component {
    state = {
        barbecue_name: '',
        modalVisible: false,
        fieldNotFullfiled: '',
        //screenWidth: window.screen.width
    };

    setFieldNotFullfiled = (field) => {
        this.setState({ fieldNotFullfiled: field });
    }

    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
    }

    componentDidMount() {
        this.onDateChange = this.onDateChange.bind(this);
    }

    handleButton = () => {
        let field = '';

        if (!this.state.barbecue_name || !data.event.endDate) {
            if (!this.state.barbecue_name && !data.event.endDate) {
                field = 'o nome e a data do churrasco';
            } else if (!this.state.barbecue_name) {
                field = 'o nome do churrasco';  
            } else if (!data.event.endDate) {
                field = data.event.startDate
                    ? 'a data de término do churrasco'
                    : 'a data do churrasco';
            }
        }

        if (field) {
            this.setFieldNotFullfiled(field);
            this.setModalVisible(true);
            return;
        }

        const { navigation } = this.props;

        navigation.navigate('Pessoas');
    };

    handleBarbecueName = text => {
        const { barbecue_name } = this.state;

        data.setBarbecueName(text);

        let newText = '';

        if (text.length == 14) {
            newText = `${barbecue_name}...`;
        } else if (text.length < 14) {
            newText = `${text}`;
        } else if (text.length > 14) {
            return;
        }

        newText = newText.toUpperCase();
        this.setState({barbecue_name : newText});
    }

    onDateChange = (date, type) => {
        if (type === 'END_DATE') {
            data.setEndDate(date);
        } else {
            data.setStartDate(date);
            data.setEndDate(null);
        }
    }

    render() {
        const {
            barbecue_name,
            modalVisible,
            fieldNotFullfiled,
            screenWidth
        } = this.state;

        const maxDate = new Date(2023, 12, 31);

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
                        <TextApp text='Primeiro dê um nome ao seu churrasco:'/>
                        <TextInput
                            style={styles.input}
                            placeholder='Ex: churras em casa'
                            onChangeText={this.handleBarbecueName}
                            maxLength={50}
                        />

                        <TextApp text='Qual será a data?' />
                        <CalendarPicker
                            allowRangeSelection={true}
                            minDate={new Date()}
                            maxDate={maxDate}
                            weekdays={['Seg', 'Ter', 'Qua', 'Qui',
                            'Sex', 'Sab', 'Dom']}
                            months={['Janeiro', 'Fevereiro', 'Março', 'Abril',
                            'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro',
                            'Outubro', 'Novembro', 'Dezembro']}
                            previousTitle="Anterior"
                            nextTitle="Próximo"
                            selectMonthTitle={`Selecionar o Mês em `}
                            selectYearTitle="Selecionar o Ano"
                            width={350}
                            selectedDayColor={colors.red}
                            selectedDayTextColor='#fff'
                            dayShape='square'
                            textStyle={{
                                fontSize: 14
                            }}
                            onDateChange={this.onDateChange}
                        />
                    </View>

                    <View style={styles.footerSection}>
                        <TouchableOpacityApp
                            text={`CRIAR ${barbecue_name}`}
                            onPress={this.handleButton}
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
        paddingHorizontal: 20,
    },
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
        width: '40%',
        textAlign: 'center',
        borderBottomColor: colors.grey,
        borderBottomWidth: 1
    },
    containerSection: {
        //marginTop: 60,
        flex: 1,
        minHeight: Dimensions.height,
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 5
    },
    footerSection: {
        flex: .1,
        alignItems: 'center',
        justifyContent: 'flex-end'
    }
});

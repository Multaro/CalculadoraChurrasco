import React from 'react';
import { 
    StyleSheet,
    View,
    ImageBackground,
    TextInput,
    Dimensions
} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker/CalendarPicker';

import TextApp from '../components/TextApp';
import TouchableOpacityApp from '../components/TouchableOpacityApp';
import ModalDataInvalid from '../components/ModalDataInvalid';

import colors from '../utils/colors';
import images from '../utils/images';
import data from '../utils/data';
import strings from '../utils/strings';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.calendarRef = React.createRef();

        this.state = {
            barbecue_name: '',
            modalVisible: false,
            fieldNotFullfiled: '',
            screenWidth: Dimensions.get('window').width,
            dateChanged: false
        }
    }

    textInput = '';

    setFieldNotFullfiled = (field) => {
        this.setState({ fieldNotFullfiled: field });
    }

    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
    }

    componentDidMount() {
        const { navigation } = this.props;

        navigation.addListener('focus', () => {
            let reseting = this.props.route.params == undefined ? false : true;

            if (this.props.route.params?.reseting) {
                reseting = true;
            }

            if (reseting) {
                this.calendarRef.current.resetSelections();
                this.textInput.clear();
                this.setState({
                    barbecue_name: ''
                });
            }
        })

        this.onDateChange = this.onDateChange.bind(this);
    }

    handleButton = () => {
        let field = '';
        const { dateChanged } = this.state;

        if (!this.state.barbecue_name || !data.event.endDate || !dateChanged) {
            if (!this.state.barbecue_name && (!data.event.endDate || !dateChanged)) {
                field = 'o nome e a data do churrasco';
            } else if (!this.state.barbecue_name) {
                field = 'o nome do churrasco';  
            } else if (!data.event.endDate || !dateChanged) {
                field = dateChanged
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
        this.setState({barbecue_name : newText.toUpperCase()});
    }

    onDateChange = (date, type) => {
        this.setState({
            dateChanged: true
        });

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

        return (
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
                            placeholder={'Ex: churras em casa'}
                            onChangeText={this.handleBarbecueName}
                            maxLength={50}
                            ref={input => { this.textInput = input }}
                        />

                        <TextApp text='Qual será a data?' />
                        <CalendarPicker
                            ref={this.calendarRef}
                            allowRangeSelection={true}
                            minDate={new Date()}
                            maxDate={maxDate}
                            weekdays={strings.weeks}
                            months={strings.months}
                            previousTitle="Anterior"
                            nextTitle="Próximo"
                            selectMonthTitle={`Selecionar o Mês em `}
                            selectYearTitle="Selecionar o Ano"
                            width={screenWidth - 50}
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

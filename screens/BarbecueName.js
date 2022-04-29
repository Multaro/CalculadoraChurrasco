import React from 'react';
import { 
    StyleSheet,
    View,
    ImageBackground,
    TextInput
} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker/CalendarPicker';

import TextApp from '../components/TextApp';
import TouchableOpacityApp from '../components/TouchableOpacityApp';

import colors from '../utils/colors';
import images from '../utils/images';

export default class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            cont: 0,
            barbecue_name: ''
        }

        this.onDateChange = this.onDateChange.bind(this);
    }

    handleButton = () => {
        const { cont } = this.state;
        const previousCont = cont;

        this.setState({ cont: previousCont + 1 });
    };

    handleBarbecueName = text => {
        const { barbecue_name } = this.state;
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
        } else {
        }
    }

    render() {
        const { barbecue_name } = this.state;

        const maxDate = new Date(2023, 12, 31);

        return(
            <ImageBackground
                source={images.background}
                style={styles.imageContainer}
                imageStyle={styles.image}
            >

                <View style={styles.background}>
                    <View style={styles.containerSection}>
                        <TextApp text='Primeiro dê um nome ao seu churrasco:'/>
                        <TextInput
                            style={styles.input}
                            placeholder='Ex: churras em casa'
                            underlineColorAndroid='black'
                            onChangeText={this.handleBarbecueName}
                            maxLength={50}
                        />

                        <TextApp text='Qual será a data?' />
                        <View style={styles.calendar}>
                            <CalendarPicker
                                allowRangeSelection={true}
                                minDate={new Date()}
                                maxDate={maxDate}
                                weekdays={['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom']}
                                months={['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']}
                                previousTitle="Anterior"
                                nextTitle="Próximo"
                                selectMonthTitle={`Selecionar o Mês em `}
                                selectYearTitle="Selecionar o Ano"
                                width={500}
                                selectedDayColor="#7300e6"
                                selectedDayTextColor="#FFFFFF"
                                textStyle={{
                                    fontSize: 14
                                }}
                                onDateChange={this.onDateChange}
                            />
                        </View>
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
        width: '50%',
        textAlign: 'center',
        border: '1px solid gray',
        borderRadius: 4
    },
    containerSection: {
        //marginTop: 60,
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        padding: 5
    },
    footerSection: {
        flex: .1,
        alignItems: 'center',
        justifyContent: 'flex-end'
    }
});


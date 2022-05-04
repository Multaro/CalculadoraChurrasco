import React from 'react';
import {
    Text,
    View,
    Modal,
    Pressable,
    StyleSheet
} from 'react-native';

function ModalDataInvalid({animationType, visible, onModalClose, fieldNotFullfiled}) {
    return ( 
        <Modal
            animationType={animationType}
            transparent={true}
            visible={visible}
            onRequestClose={() => {
                onModalClose(!modalVisible);
            }}
        >
            <View style={modalStyles.centeredView}>
                <View style={modalStyles.modalView}>
                    <Text style={modalStyles.modalText}>Preencha {fieldNotFullfiled}.</Text>
                    <Pressable
                        style={[modalStyles.button, modalStyles.buttonClose]}
                        onPress={() => onModalClose(!visible)}
                    >
                        <Text style={modalStyles.textModalStyle}>Entendido</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
    );
}

const modalStyles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        backgroundColor: "#2196F3"
      },
      textModalStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      }
});

export default ModalDataInvalid;
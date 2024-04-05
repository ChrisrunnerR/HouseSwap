import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
const SignUp = () => {
  console.log("we are atleast getting here");
  const [modalVisible, setModalVisible] = useState(true);
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
        setModalVisible(!modalVisible);
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          {/* "Continue With Email" */}
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => setModalVisible(!modalVisible)}
          >
            <Text style={styles.textStyle}>Sign In</Text>
          </Pressable>

          {/* "Continue With Google " */}
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => setModalVisible(modalVisible)}
          >
            <Text style={styles.textStyle}>Sign Up</Text>
          </Pressable>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => setModalVisible(modalVisible)}
          >
            <Text style={styles.textStyle}>Continue With Google</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    position: "absolute",
    top: 40,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 25,
    backgroundColor: "#a4bcb7",
    alignItems: "stretch",
    justifyContent: "flex-end",
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    margin: 5,
    bottom: 60,
  },
  buttonOpen: {
    backgroundColor: "#17392b",
  },
  buttonClose: {
    backgroundColor: "#17392b",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default SignUp;

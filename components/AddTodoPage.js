import React, { Component, useContext } from 'react'
import { Text, View, StyleSheet, Dimensions, Image, TextInput, Keyboard, Alert } from 'react-native'
import Header from './Header'
import { TodosContext } from './TodosContext';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Swidth = Dimensions.get("screen").width;
const Sheight = Dimensions.get("screen").height;

export default function AddTodoPage() {
  const [title, setTitle] = React.useState('');
  const [desc, setDesc] = React.useState('');
  const { addTodo } = useContext(TodosContext);
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{}}>
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}
      >
        <View style={styles.header} >
          <TouchableOpacity onPress={() => {navigation.navigate("Home")}}>
          <Image style={styles.image}
            source={require("../assets/back.png")}
          />
          </TouchableOpacity>
          <Text style={styles.headerText}>Add Todo</Text>
          <View style={{ width: Swidth * 0.05, }}></View>
        </View>
        <View style={styles.box1}>
          <View>
            <Text style={styles.titleText}>Title</Text>
            <TextInput
              style={styles.titleInput}
              onChangeText={setTitle}
            />
          </View>
        </View>
        <View style={styles.box2}>
          <View>
            <Text style={styles.descText}>Description</Text>
            <TextInput
              style={styles.descInput}
              maxLength={250} 
              onChangeText={setDesc}
            />
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => { if(title.length>3) {
            navigation.navigate("Home"),
            addTodo(title,desc)
          }else{
            Alert.alert("Title must be longer than 3 characters!")
          }}}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Add Todo</Text>
            </View>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  )
}




const styles = StyleSheet.create({

  image: {
    height: Swidth * 0.07,
    width: Swidth * 0.07,
  },
  header: {
    backgroundColor: "#4E0786",
    width: Swidth,
    height: Sheight * 0.1,
    alignItems: "center",
    flexDirection: 'row',
    justifyContent: "space-between",
    paddingHorizontal: Swidth * 0.04
  },
  headerText: {
    color: "white",
    textAlign: "center",
    fontFamily: "Poppins",
    fontSize: Swidth * 0.06,
  },
  box: {
    backgroundColor: "red",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-around",
    width: Swidth,
    height: Sheight * 0.4,
  },
  box1: {
    backgroundColor: "#4E0786",
    alignItems: "center",
    flexDirection: 'row',
    justifyContent: "space-around",
    width: Swidth,
    height: Sheight * 0.2,
  },
  box2: {
    backgroundColor: "#4E0786",
    alignItems: "center",
    flexDirection: 'row',
    justifyContent: "space-around",
    width: Swidth,
    height: Sheight * 0.4,
  },
  titleText: {
    color: "white",
    fontFamily: "Poppins",
    fontSize: Swidth * 0.06,

  },
  titleInput: {
    backgroundColor: "white",
    width: Swidth * 0.9,
    height: Sheight * 0.06,
    borderRadius: 20,
    fontFamily: "Poppins",
    fontSize: Swidth * 0.06,
    textAlignVertical: "center",
    paddingHorizontal: Swidth * 0.03,
    borderWidth: 1,
    borderColor: "black"
  },
  descText: {
    color: "white",
    fontSize: Swidth * 0.06,
    fontFamily:"Poppins",
  },
  descInput: {
    backgroundColor: "white",
    width: Swidth * 0.9,
    height: Sheight * 0.3,
    borderRadius: Sheight * 0.02,
    textAlignVertical: "top",
    padding: Sheight * 0.02,
    fontFamily: "Poppins",
    fontSize: Sheight * 0.03,
    borderWidth: 1,
    borderColor: "black"
  },
  buttonContainer: {
    width: Swidth,
    alignItems: 'center',
    backgroundColor: "#4E0786",
    height: Sheight
  },
  button: {
    height: Sheight * 0.06,
    backgroundColor: "#340657",
    width: Swidth * 0.45,
    alignItems: "center",
    borderRadius: Swidth * 0.07,
    justifyContent:"center",
    borderWidth:1
  },
  buttonText: {
    color: "white",
    fontSize: Swidth * 0.045,
  },


})

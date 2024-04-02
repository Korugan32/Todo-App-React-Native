import React, { useState, useContext } from 'react';
import { View, TouchableOpacity, StyleSheet, Dimensions, Image, Text, } from 'react-native';
import Header from './Header';
import { SwipeListView } from 'react-native-swipe-list-view';
import { TodosContext } from './TodosContext';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Swidth = Dimensions.get("screen").width;
const Sheight = Dimensions.get("screen").height;


export default function Home() {
  const { todos, deleteTodo } = useContext(TodosContext);
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View style={[styles.container]}>
        <Header
          text={"Todo App"} />
        <SwipeListView
          data={todos}
          renderItem={(data, rowMap) => (
            <TouchableOpacity
              onPress={() => { navigation.navigate("ShowInfo", { id: data.item.key }) }}>
              <View style={styles.todoView}>
                <View>
                  <Text style={data.item.isDone ? styles.todoTitleTrue :
                    styles.todoTitleFalse}>
                    {data.item.title}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
          renderHiddenItem={(data, rowMap) => (
            <View style={styles.rowBack}>
              <TouchableOpacity onPress={() => {
                deleteTodo(data.item.key)
              }}>
                <Image
                  source={require("../assets/trash.png")}
                  style={styles.trashIcon}
                />
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
          disableRightSwipe={true}
          rightOpenValue={-Swidth * 0.15}
        />
        <TouchableOpacity style={[styles.add_button_view]}
        onPress={() => {navigation.navigate("AddTodoPage")}}
        >
            <Image style={[styles.button_icon]} source={require('../assets/plus.png')} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: Swidth,
    height: '100%',
    justifyContent: 'space-between',
    alignItems: "center"
  },
  add_button_view: {
    width: Swidth * 0.15,
    height: Swidth * 0.15,
    borderRadius: 100,
    backgroundColor: '#4E0786',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: Swidth * 0.05,
    right: Swidth * 0.05,
    borderWidth:2
  },
  add_button_text: {
    fontSize: Swidth * 0.075,
    fontWeight: '400',
    color: 'white'
  },
  button_icon: {
    width: Swidth * 0.07,
    height: Swidth * 0.07
  },
  todoTitleFalse: {
    backgroundColor: "#4E0786",
    width: Swidth * 0.96,
    height: Sheight * 0.08,
    borderRadius: Sheight * 0.2,
    textAlign: "center",
    fontFamily: "Poppins",
    fontSize: Sheight * 0.03,
    color: "white",
    textAlignVertical: "center",
    borderWidth: 1,
  },
  todoTitleTrue: {
    backgroundColor: "#1dbd0f",
    width: Swidth * 0.96,
    height: Sheight * 0.08,
    borderRadius: Sheight * 0.2,
    textAlign: "center",
    fontFamily: "Poppins",
    fontSize: Sheight * 0.03,
    color: "white",
    textAlignVertical: "center",
    borderWidth: 1,
  },
  todoView: {
    paddingVertical: Swidth * 0.011
  },
  trashIcon: {
    width: Swidth * 0.1,
    height: Swidth * 0.1,
    alignSelf: "flex-end",

  },
  rowBack: {
    flexDirection: "column",
    paddingVertical: Swidth * 0.011,
    paddingHorizontal: Swidth * 0.011,
    top: Sheight * 0.01
  }

});
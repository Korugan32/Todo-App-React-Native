import React, { useContext, useState, useEffect } from 'react';
import { View, StyleSheet, Text, Dimensions, TouchableOpacity, Image } from 'react-native';
import { TodosContext } from './TodosContext';
import { useNavigation, useRoute } from '@react-navigation/native';
import Header from './Header';
import { SafeAreaView } from 'react-native-safe-area-context';

const Swidth = Dimensions.get("screen").width;
const Sheight = Dimensions.get("screen").height;

export default function ShowInfo() {
    const { todos, toggleCompleted, deleteTodo } = useContext(TodosContext);
    const route = useRoute();
    const navigation = useNavigation();
    const [id, setId] = useState(route.params.id - 1);
    useEffect(() => {
        if (id < 0 || id >= todos.length) {
            setId(Math.max(0, todos.length - 1));
        }
    }, [id, todos.length]);
    const todo = todos[id];
    return (
        <SafeAreaView>
            <View>
                {todo && (
                    <>
                        <View style={styles.header} >
                            <TouchableOpacity onPress={() => { navigation.navigate("Home") }}>
                                <Image style={styles.image}
                                    source={require("../assets/back.png")}
                                />
                            </TouchableOpacity>
                            <Text style={styles.headerText}>{todo.title}</Text>
                            <View style={{ width: Swidth * 0.057, }}></View>
                        </View>
                        <View style={styles.infoContainer}>  
                            <View style={{height:Sheight*0.04}}></View>
                            <View style={styles.info}>
                            <View style={{height:Sheight*0.06, width:Swidth*0.9,borderRadius:Sheight*0.05,}}>
                                <Text style={styles.headerText}>{todo.title}</Text>
                            </View>
                            <View style={{height:Sheight*0.3399, width:Swidth*0.9,borderRadius:Sheight*0.05,}}>
                                <Text style={styles.descText}>{todo.desc}</Text>
                            </View>
                            </View>


                        </View>
                    </>
                )}
                <View style={styles.doneButton}>
                    <TouchableOpacity
                        onPress={() => {
                            if (todo) {
                                toggleCompleted(todo.key);
                            }
                            navigation.navigate("Home");
                        }}>
                        <Text style={styles.doneText}>Complete Task</Text>
                    </TouchableOpacity>
                </View>
                <View style={{height:Sheight*0.01}}>

                </View>
                <View style={styles.deleteButton}>
                    <TouchableOpacity
                        onPress={() => {
                            if (todo) {
                                deleteTodo(todo.key);
                                navigation.navigate("Home")
                            }
                        }}>
                        <Text style={styles.deleteText}>Delete Task</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );

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
        paddingHorizontal: Swidth * 0.04,
        backgroundColor: "#3e0772"
    },
    headerText: {
        color: "white",
        textAlign: "center",
        fontFamily: "Poppins",
        fontSize: Swidth * 0.06,
      },
      infoContainer:{
        height:Sheight*0.6,
        alignItems:"center"
      },
      info:{
        backgroundColor:"#4E0786",
        height:Sheight*0.5,
        borderRadius:Sheight*0.05,
        width:Swidth*0.9
      },
      descText:{
        paddingHorizontal:Sheight*0.038,
        color:"white",
        fontSize: Swidth * 0.05,
      },
      doneButton:{
        backgroundColor:"#15b90f",
        width:Swidth*0.5,
        height:Sheight*0.06,
        right:Sheight*0.03,
        borderRadius:Sheight*0.05,
      },
      doneText:{
        textAlign:"right",
        alignSelf:"center",
        fontSize:Sheight*0.027,
        left:Sheight*0.01,
        color:"white",
        fontWeight:"500",
        top:Sheight*0.01,
      },
      deleteButton:{
        backgroundColor:"#b90f1d",
        width:Swidth*0.5,
        height:Sheight*0.06,
        right:Sheight*0.058,
        borderRadius:Sheight*0.05,
      },
      deleteText:{
        textAlign:"right",
        alignSelf:"center",
        fontSize:Sheight*0.026,
        left:Sheight*0.02,
        color:"white",
        fontWeight:"500",
        top:Sheight*0.01,
      }
});

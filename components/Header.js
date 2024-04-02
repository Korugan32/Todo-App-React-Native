
import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Text, View, StyleSheet, Dimensions, } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

const Swidth = Dimensions.get("screen").width;
const Sheight = Dimensions.get("screen").height;

export default function Header({ text }) {

    return (
            <View style={styles.header} >
                <Text style={styles.headerText}>{text}</Text>
            </View>
    )

}


const styles = StyleSheet.create({
    header: {
        backgroundColor: "#4E0786",
        width: Swidth,
        height: Sheight * 0.1,
        alignItems:'center',
        justifyContent:'center'
    },
    headerText: {
        color: "white",
        fontSize: Swidth * 0.07,
        fontWeight:'500',
    },

});



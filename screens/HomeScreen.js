import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View, Button, Alert, TextInput} from 'react-native'

export default function HomeScreen () {
    return(
        <View style={styles.container}>
            <TextInput style={styles.textInput, styles.container}
                placeholder="0"
                keyboardType='number-pad'
            />
            < StatusBar />
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textInput: {
        height: 40,
        width: 200,
        borderColor: 'black',
        borderWidth: 1
    }
})
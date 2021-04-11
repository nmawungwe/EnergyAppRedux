import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View, Button, Alert} from 'react-native'


export default function TipScreen ({route, navigation}) {

    const {tip} = route.params

    return(
        <View style={styles.container}>
            <Text style={styles.title}>{tip.title}</Text>
            <Text style={styles.body}>{tip.body}</Text>
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
    title: {
        fontWeight: 'bold',
        textAlign: 'left'
    }, 
    body: {
        textAlign:'justify'
    }
})



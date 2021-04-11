import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View, Button, Alert} from 'react-native'


export default function TipScreen ({route, navigation}) {

    const {tip} = route.params

    return(
        <View style={styles.container}>
            <Text style={styles.title}>{tip.title}</Text>
            <Text style={styles.body}>{tip.body}</Text>
            <Button
                title="Back"
                onPress={()=> navigation.navigate('Tips')}
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
        padding: 24,
    }, 
    title: {
        fontWeight: 'bold',
        textAlign: 'left',
        padding: 8
    }, 
    body: {
        textAlign:'justify',
        marginBottom: 8
    }
})



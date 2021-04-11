import React from 'react'
import {StyleSheet, Text, View, Alert, TouchableHighlight} from 'react-native'



export const Tip = ({tip, navigation}) => (

     
        <TouchableHighlight style={styles.touchable} onPress={()=> navigation.navigate('Tip', {tip} )}>
            <View style={styles.container}>
                <Text style={styles.title}>{tip.title}</Text>
                    <Text style={styles.body}>{tip.body.substring(0, 100)}</Text>
            </View>
        </TouchableHighlight>
)




const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        borderColor: '#61dafb',
        padding: 2,
        borderWidth: 2,
        borderRadius: 4

    },
    title: {
        fontWeight: 'bold',
        textAlign: 'left'
    }, 
    body: {
        textAlign:'justify'
    },
    touchable : {
        padding: 2
    }
})




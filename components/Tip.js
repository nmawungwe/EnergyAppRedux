import React from 'react'
import {StyleSheet, Text, View, Alert, TouchableHighlight} from 'react-native'



export const Tip = ({tip, navigation}) => (

     
        <TouchableHighlight onPress={()=> navigation.navigate('Tip', {tip} )}>
            <View>
                <Text style={styles.title}>{tip.title}</Text>
                    <Text style={styles.body}>{tip.body.substring(0, 100)}</Text>
            </View>
        </TouchableHighlight>
)




const styles = StyleSheet.create({
    container: {
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




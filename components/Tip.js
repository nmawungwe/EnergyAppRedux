import React from 'react'
import {StyleSheet, Text, View} from 'react-native'


export const Tip = ({tip}) => (
    <View>
        <Text style={styles.title}>{tip.title}</Text>
            <Text style={styles.body}>{tip.body}</Text>
    </View>
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




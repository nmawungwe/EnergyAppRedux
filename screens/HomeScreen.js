import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {StyleSheet, Text, View, Button, Alert, TextInput} from 'react-native'
import {connect} from 'react-redux'
// import { ReactReduxContext } from 'react-redux'
// import connect from "react-redux/es/connect/connect"


class HomeScreen extends React.Component {
    render(){
        return (
            <View style={styles.container}>
                <View style={styles.inputRow}>
                    <Text>Number of TVs: </Text>
                    <TextInput style={styles.textInput}
                        placeholder="Number of TVs"
                        keyboardType='number-pad'
                    />
                </View>
                <View style={styles.inputRow}>
                    <Text>Number of Decoders: </Text>
                    <TextInput style={styles.textInput}
                        placeholder="Number of Decoders"
                        keyboardType='number-pad'
                    />
                </View>
                <View style={styles.inputRow}>
                    <Text>Number of Sound Systems: </Text>
                    <TextInput style={styles.textInput}
                        placeholder="Number of Sound Systems"
                        keyboardType='number-pad'
                    />
                </View>
                <View style={styles.inputRow}>
                    <Text>Number of Lights: </Text>
                    <TextInput style={styles.textInput}
                        placeholder="Number of Lights"
                        keyboardType='number-pad'
                    />
                </View>
                <View style={styles.inputRow}>
                    <Text>Number of Heaters: </Text>
                    <TextInput style={styles.textInput}
                        placeholder="Number of Heaters"
                        keyboardType='number-pad'
                    />
                </View>
                <View style={styles.inputRow}>
                    <Text>Number of Stoves: </Text>
                    <TextInput style={styles.textInput}
                        placeholder="Number of Stoves"
                        keyboardType='number-pad'
                    />
                </View>
                <View style={styles.inputRow}>
                    <Text>Number of Fridges: </Text>
                    <TextInput style={styles.textInput}
                        placeholder="Number of Fridges"
                        keyboardType='number-pad'
                    />
                </View>
                <View style={styles.inputRow}>
                    <Text>Number of Kettles: </Text>
                    <TextInput style={styles.textInput}
                        placeholder="Number of Kettles"
                        keyboardType='number-pad'
                    />
                </View>
                <View style={styles.inputRow}>
                    <Text>Number of Microwaves: </Text>
                    <TextInput style={styles.textInput}
                        placeholder="Number of Microwaves"
                        keyboardType='number-pad'
                    />
                </View>
                <View style={styles.inputRow}>
                    <Text>Number of Computers: </Text>
                    <TextInput style={styles.textInput}
                        placeholder="Number of Computers"
                        keyboardType='number-pad'
                    />
                </View>
                <View style={styles.inputRow}>
                    <Text>Number of Printers: </Text>
                    <TextInput style={styles.textInput}
                        placeholder="Number of Printers"
                        keyboardType='number-pad'
                    />
                </View>
                <View style={styles.inputRow}>
                    <Text>Number of Modems: </Text>
                    <TextInput style={styles.textInput}
                        placeholder="Number of Modems"
                        keyboardType='number-pad'
                    />
                </View>
                <View style={styles.inputRow}>
                    <Text>Number of Electric Blankets: </Text>
                    <TextInput style={styles.textInput}
                        placeholder="Number of Electric Blankets"
                        keyboardType='number-pad'
                    />
                </View>
                <View style={styles.inputRow}>
                    <Text>Number of Phones: </Text>
                    <TextInput style={styles.textInput}
                        placeholder="Number of Phones"
                        keyboardType='number-pad'
                    />
                </View>
                <Text>Consumption: {this.props.consumption} kWh </Text>
                {/* <Button
                    title="Calculate"
                    onPress={()=>{ Alert.alert('You pressed the calculate button')}}
                /> */}
                < StatusBar />
            </View>
    )


    }
}
// Map Redux state to React component props 

const mapStateToProps = (state) => {
    const { consumption } = state.consumption.consumption
    return { consumption }
}

// Connect Redux to React 
export default connect(mapStateToProps)(HomeScreen)


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRow: {
        flexDirection: 'row',
        padding: 10,
        textAlign: 'left'
    },
    labelText: {
        fontSize: 20,
        fontWeight: "bold",
        fontFamily: "Cochin"
    }
})
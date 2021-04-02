import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {StyleSheet, Text, View, Button, Alert, TextInput, ScrollView, SafeAreaView, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard} from 'react-native'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import { calculateConsumption } from '../actions/consumptionActions'
import * as actions from '../actions/consumptionActions'

// import { ReactReduxContext } from 'react-redux'
// import connect from "react-redux/es/connect/connect"


class HomeScreen extends React.Component {

    
    state = {
        tvNumber: '',
        decoderNumber: '',
        soundSystemNumber: '',
        lightsNumber: '',
        heatersNumber: '',
        stovesNumber: '',
        fridgesNumber: '',
        kettlesNumber: '',
        microwavesNumber: '',
        computersNumber: '',
        printersNumber: '',
        modemsNumber: '',
        electricblanketsNumber: '',
        phonesNumber: '',
        // totalUsage: ''
    }

    
    TvHandler = (tvNumber) => {this.setState({ tvNumber })}
    DecoderHandler = (decoderNumber) => {this.setState({ decoderNumber})}
    SoundSystemHandler = (soundSystemNumber) => {this.setState({ soundSystemNumber})}
    LightsHandler = (lightsNumber) => {this.setState({lightsNumber })}
    HeatersHandler = (heatersNumber) => {this.setState({ heatersNumber })}
    StovesHandler = (stovesNumber) => {this.setState({stovesNumber})}
    FridgesHandler = (fridgesNumber) => {this.setState({fridgesNumber})}
    KettlesHandler = (kettlesNumber) => {this.setState({kettlesNumber})}
    MicrowavesHandler = (microwavesNumber) => {this.setState({microwavesNumber})}
    ComputersHandler = (computersNumber) => {this.setState({computersNumber})}
    PrintersHandler = (printersNumber) => {this.setState({printersNumber})}
    ModemsHandler = (modemsNumber) => {this.setState({ modemsNumber})}
    ElectricblanketsHandler = (electricblanketsNumber) => {this.setState({electricblanketsNumber})}
    PhonesHandler = (phonesNumber) => {this.setState({phonesNumber})}

    precise = (x) => {
        return Number.parseFloat(x).toPrecision(3)
    }


    calculate = () => {

            // let { actions } = this.props
    
            let TvUsage = 0.72
            let DecoderUsage = 0.72
            let SoundSystemUsage = 0.6
            let LightUsage = 0.16
            let HeaterUsage = 0.026
            let StoveUsage = 2
            let FridgeUsage = 9.6
            let KettleUsage = 0.333
            let MicrowaveUsage = 0.257
            let ComputerUsage = 0.24
            let PrinterUsage = 0.005
            let ModemUsage = 0.288
            let ElectricBlanket = 0.015
            let PhoneUsage = 0.12
        
            let totalUsage = (this.state.tvNumber * TvUsage + this.state.decoderNumber * DecoderUsage + this.state.soundSystemNumber * SoundSystemUsage + this.state.lightsNumber * LightUsage + this.state.heatersNumber * HeaterUsage + this.state.stovesNumber * StoveUsage + this.state.fridgesNumber * FridgeUsage + this.state.kettlesNumber * KettleUsage + this.state.microwavesNumber * MicrowaveUsage + this.state.computersNumber * ComputerUsage + this.state.printersNumber * PrinterUsage +  this.state.modemsNumber * ModemUsage + this.state.electricblanketsNumber * ElectricBlanket + this.state.phonesNumber * PhoneUsage )
            
            // https://stackoverflow.com/questions/55348078/react-updates-state-when-clicked-twice
            // this.setState({totalUsage}) this is an asychronous operation therefore it would delay the dipatching action and would need  
    
            let data = {
                tvNumber: this.state.tvNumber ,
                decoderNumber: this.state.decoderNumber,
                soundSystemNumber: this.state.soundSystemNumber,
                lightsNumber: this.state.lightsNumber,
                heatersNumber: this.state.heatersNumber,
                stovesNumber: this.state.stovesNumber,
                fridgesNumber: this.state.fridgesNumber,
                kettlesNumber: this.state.kettlesNumber ,
                microwavesNumber: this.state.microwavesNumber,
                computersNumber: this.state.computersNumber,
                printersNumber: this.state.printersNumber,
                modemsNumber: this.state.modemsNumber,
                electricblanketsNumber: this.state.electricblanketsNumber ,
                phonesNumber: this.state.phonesNumber,
                totalUsage: totalUsage
            } 
            
            this.props.calculateConsumption(data)
            
            }
    




    render(){
        return (
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.container}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <SafeAreaView>
                    <ScrollView 
                        keyboardDismissMode="interactive"
                         >
                    <View style={styles.inner}>
                    <Text style={styles.title}>Energy App</Text>
                    <View style={styles.inputRow}>
                        <Text style={styles.labelText}>Number of TVs: </Text>
                        <TextInput style={styles.textInput}
                            placeholder="Number of TVs"
                            keyboardType='number-pad'
                            onChangeText={this.TvHandler}
                            value={this.state.tvNumber}
                        />
                    </View>
                    <View style={styles.inputRow}>
                        <Text>Number of Decoders: </Text>
                        <TextInput style={styles.textInput}
                            placeholder="Number of Decoders"
                            keyboardType='number-pad'
                            onChangeText={this.DecoderHandler}
                            value={this.state.decoderNumber}
                        />
                    </View>
                    <View style={styles.inputRow}>
                        <Text>Number of Sound Systems: </Text>
                        <TextInput style={styles.textInput}
                            placeholder="Number of Sound Systems"
                            keyboardType='number-pad'
                            onChangeText={this.SoundSystemHandler}
                            value={this.state.soundSystemNumber}
                        />
                    </View>
                    <View style={styles.inputRow}>
                        <Text>Number of Lights: </Text>
                        <TextInput style={styles.textInput}
                            placeholder="Number of Lights"
                            keyboardType='number-pad'
                            onChangeText={this.LightsHandler}
                            value={this.state.lightsNumber}
                        />
                    </View>
                    <View style={styles.inputRow}>
                        <Text>Number of Heaters: </Text>
                        <TextInput style={styles.textInput}
                            placeholder="Number of Heaters"
                            keyboardType='number-pad'
                            onChangeText={this.HeatersHandler}
                            value={this.state.heatersNumber}
                        />
                    </View>
                    <View style={styles.inputRow}>
                        <Text>Number of Stoves: </Text>
                        <TextInput style={styles.textInput}
                            placeholder="Number of Stoves"
                            keyboardType='number-pad'
                            onChangeText={this.StovesHandler}
                            value={this.state.stovesNumber}
                        />
                    </View>
                    <View style={styles.inputRow}>
                        <Text>Number of Fridges: </Text>
                        <TextInput style={styles.textInput}
                            placeholder="Number of Fridges"
                            keyboardType='number-pad'
                            onChangeText={this.FridgesHandler}
                            value={this.state.fridgesNumber}
                        />
                    </View>
                    <View style={styles.inputRow}>
                        <Text>Number of Kettles: </Text>
                        <TextInput style={styles.textInput}
                            placeholder="Number of Kettles"
                            keyboardType='number-pad'
                            onChangeText={this.KettlesHandler}
                            value={this.state.kettlesNumber}
                        />
                    </View>
                    <View style={styles.inputRow}>
                        <Text>Number of Microwaves: </Text>
                        <TextInput style={styles.textInput}
                            placeholder="Number of Microwaves"
                            keyboardType='number-pad'
                            onChangeText={this.MicrowavesHandler}
                            value={this.state.microwavesNumber}
                        />
                    </View>
                    <View style={styles.inputRow}>
                        <Text>Number of Computers: </Text>
                        <TextInput style={styles.textInput}
                            placeholder="Number of Computers"
                            keyboardType='number-pad'
                            onChangeText={this.ComputersHandler}
                            value={this.state.computersNumber}
                        />
                    </View>
                    <View style={styles.inputRow}>
                        <Text>Number of Printers: </Text>
                        <TextInput style={styles.textInput}
                            placeholder="Number of Printers"
                            keyboardType='number-pad'
                            onChangeText={this.PrintersHandler}
                            value={this.state.printersNumber}
                        />
                    </View>
                    <View style={styles.inputRow}>
                        <Text>Number of Modems: </Text>
                        <TextInput style={styles.textInput}
                            placeholder="Number of Modems"
                            keyboardType='number-pad'
                            onChangeText={this.ModemsHandler}
                            value={this.state.modemsNumber}
                        />
                    </View>
                    <View style={styles.inputRow}>
                        <Text>Number of Electric Blankets: </Text>
                        <TextInput style={styles.textInput}
                            placeholder="Number of Electric Blankets"
                            keyboardType='number-pad'
                            onChangeText={this. ElectricblanketsHandler}
                            value={this.state.electricblanketsNumber}
                        />
                    </View>
                    <View style={styles.inputRow}>
                        <Text>Number of Phones: </Text>
                        <TextInput style={styles.textInput}
                            placeholder="Number of Phones"
                            keyboardType='number-pad'
                            onChangeText={this.PhonesHandler}
                            value={this.state.phonesNumber}
                        />
                    </View>
                    <Button
                        color='#61dafb'
                        title = "Calculate"
                        accessibilityLabel="Calculate"
                        onPress = {this.calculate}
                    />
                    <Text>Consumption: {this.precise(this.props.data.totalUsage)} kWh/day </Text>
                    < StatusBar />
                    </View>
                    </ScrollView>
                </SafeAreaView>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
    )


    }
}




// Map Redux state to React component props
 

const mapStateToProps = (state) => {
    return {
        data:  state.data
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        // https://dev.to/colerau/how-redux-s-mapdispatchtoprops-works-3aal 
        calculateConsumption: (data) => dispatch(calculateConsumption(data)), 
    }
}

// Connect Redux to React 
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
        // paddingTop: StatusBar.currentHeight
    },
    inner: {
        padding: 24,
        flex: 1,
        justifyContent: 'center',
        // paddingTop: StatusBar.currentHeight,
        alignItems: 'center',
    },
    inputRow: {
        flexDirection: 'row',
        padding: 10,
        textAlign: 'left'
    },
    title: {
            paddingVertical: 8,
            borderWidth: 4,
            borderColor: "#20232a",
            borderRadius: 6,
            // width: 175,
            textAlign: "center",
            fontSize: 30,
            fontWeight: "bold",
            marginTop: 16,
            borderWidth: 4,
            padding: 8,
            backgroundColor: "#61dafb"
    },
    // calculateButton: {
    //     color: "#61dafb"
    // }
})
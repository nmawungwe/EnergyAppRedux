import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View, Button, Alert} from 'react-native'
import { connect } from 'react-redux';

function StatsScreen ({data}) {

    function precise(x){
        return Number.parseFloat(x).toPrecision(3)
    }

    return(
        <View style={styles.container}>
        <View style={styles.row}>
            <View style={styles.column}>
                <Text>Tvs: {data.tvNumber}</Text> 
            </View>
            <View style={styles.column}>
                <Text >Decoders: {data.decoderNumber}</Text> 
            </View>
        </View>
        <Text>SoundSystems: {data.soundSystemNumber}</Text>
        <Text>Lights: {data.lightsNumber}</Text>
        <Text>Heaters: {data.heatersNumber}</Text>
        <Text>Stoves: {data.stovesNumber}</Text>
        <Text>Fridges: {data.fridgesNumber}</Text>
        <Text>Kettles: {data.kettlesNumber}</Text>
        <Text>Microwaves: {data.microwavesNumber}</Text>
        <Text>Computers: {data.computersNumber}</Text>
        <Text>Printers: {data.printersNumber}</Text>
        <Text>Modems: {data.modemsNumber}</Text>
        <Text>Electric Blankets: {data.electricblanketsNumber}</Text>
        <Text>Phones: {data.phonesNumber}</Text>
        <Text>Total Consumption: {precise(data.totalUsage)} kWh/day</Text>
        < StatusBar />
      </View>
    )
}


const mapStateToProps = (state) => {
    return {
        data:  state.data
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    column :{
        flexDirection: "column"
    },
    row: {
        flexDirection: "row"
    },
    text: {
        paddingVertical: 8,
        borderWidth: 4,
        borderColor: "#20232a",
        borderRadius: 6
    }
    
})

export default connect(mapStateToProps)(StatsScreen)
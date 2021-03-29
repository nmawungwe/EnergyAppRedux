import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View, Button, Alert} from 'react-native'
import { connect } from 'react-redux';

function StatsScreen ({data}) {
    return(
        <View style={styles.container}>
        <Text>Tvs: {data.tvNumber}</Text>
        <Text>Decoders: {data.decoderNumber}</Text>
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
        <Text>Total Consumption: {data.totalUsage} kWh/day</Text>
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
    }
})

export default connect(mapStateToProps)(StatsScreen)
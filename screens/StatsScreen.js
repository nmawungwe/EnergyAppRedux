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
        <Text style={styles.title}>Energy App</Text>
        <View style={styles.appliances}>
        <Text >Tvs: {data.tvNumber}</Text> 
        <Text >Decoders: {data.decoderNumber}</Text> 
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
        <Text style={styles.reading}>Total Consumption: {precise(data.totalUsage)} kWh/day</Text>
        </View>
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
    appliances: {
        borderColor: '#61dafb',
        padding: 8,
        borderWidth: 2,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
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
        marginBottom: 16,
        borderWidth: 4,
        padding: 8,
        backgroundColor: "#61dafb"
    },
    reading: {
        marginTop: 12,
        fontWeight: "bold",
    },    
})

export default connect(mapStateToProps)(StatsScreen)
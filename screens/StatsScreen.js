import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View, Button, Alert} from 'react-native'
import { connect } from 'react-redux';

function StatsScreen ({consumption}) {
    return(
        <View style={styles.container}>
        <Text>Your current consumption is {consumption} kWh/day</Text>
        < StatusBar />
      </View>
    )
}


const mapStateToProps = (state) => {
    return {
        consumption: state.consumption.consumption
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
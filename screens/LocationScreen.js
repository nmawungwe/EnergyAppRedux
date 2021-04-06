import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import {StyleSheet, Text, View, Button, Alert, Dimensions} from 'react-native'
import MapView  from 'react-native-maps'
import { Marker } from 'react-native-maps'
import * as Location from 'expo-location'


export default function LocationScreen () {
    const [location, setLocation] = useState(null)
    const [errorMsg, setErrorMsg] = useState(null)


    useEffect(() => {
        (async () => {
            let { status } = await Location.requestPermissionsAsync()
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied')
                return
            }

            let location = await Location.getCurrentPositionAsync({})
            setLocation(location)
        })();
    }, [])

    let gpsCoords = {}
    
    if (errorMsg) {
        text= errorMsg
        console.log(text)
    } else if (location) {
        gpsCoords = {
            latitude: location.coords.latitude,
            longitude: location.coords.longitude
        }
    }

    return(
        <View style={styles.container}>
            <MapView style={styles.map}>
                <Marker
                    title="You are here!"
                    coordinate={{
                        latitude: gpsCoords.latitude,
                        longitude: gpsCoords.longitude
                    }}
                    pinColor='#0c22eb'
                />
                <Marker
                    title="Koeberg"
                    coordinate={{
                        latitude: -33.6745,
                        longitude: 18.4330
                    }}
                    pinColor='#000000'
                />
                <Marker
                    title="Kusile"
                    coordinate={{
                        latitude: -26.24,
                        longitude: 29.77
                    }}
                    pinColor='#eba044'
                />
                <Marker
                    title="Ankerling"
                    coordinate={{
                        latitude: -34.3293,
                        longitude: 18.8609
                    }}
                    pinColor='#41db25'
                />
                <Marker
                    title="Kendal"
                    coordinate={{
                        latitude: -26.7347,
                        longitude: 29.4000
                    }}
                />
             </MapView>   
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
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    }
})
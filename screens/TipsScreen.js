import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View, Button, Alert} from 'react-native'
import {connect} from 'react-redux'
import {Tip} from '../components/Tip'

const TipsScreen = ({tips}) => {

    const renderTips = () => {
        return tips.map((tip) => <Tip key={tip.id} tip={tip} /> )
    }

    return(
        <View style={styles.container}>
        <Text>Screen 2 (Tips Page)</Text>
        {renderTips()}
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
    }
})

const mapStateToProps = (state) => ({
    tips: state.tips.tips
})

export default connect(mapStateToProps)(TipsScreen)
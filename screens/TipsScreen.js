import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View, Button, Alert, SafeAreaView, ScrollView} from 'react-native'
import { useNavigation } from '@react-navigation/native';



import {connect} from 'react-redux'
import {Tip} from '../components/Tip'

const TipsScreen = ({tips}) => {

    const navigation = useNavigation();

    const renderTips = () => {
        return tips.map((tip) => <Tip key={tip.id} tip={tip} navigation={navigation} /> )
    }

    return(
        <View style={styles.container}>
            <SafeAreaView>
                <ScrollView>
                {renderTips()}
                < StatusBar />
                </ScrollView>
            </SafeAreaView>
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24,

    }
})

const mapStateToProps = (state) => ({
    tips: state.tips.tips
})

export default connect(mapStateToProps)(TipsScreen)
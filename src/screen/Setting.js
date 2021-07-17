import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { colors } from '../assets/Theme'

export default class Setting extends Component {
    render() {
        return (
            <View style={{flex:1,backgroundColor:colors.blue,justifyContent:"center",alignItems:"center"}}>
            <Text> Setting </Text>
        </View>
        )
    }
}

const styles = StyleSheet.create({})

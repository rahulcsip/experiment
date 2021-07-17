import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { colors } from './src/assets/Theme'
import AppNavigation from './src/navigation/Index'

export default class App extends Component {
  render() {
    return (
      <View style={{flex:1,backgroundColor:colors.blue}}>
       <AppNavigation/>
      </View>
    )
  }
}

const styles = StyleSheet.create({})

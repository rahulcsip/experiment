import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { colors } from './src/assets/Theme'
import AppNavigation from './src/navigation/Index'
import SignIn2 from './src/screen/auth/SignIn2'
export default class App extends Component {
  render() {
    return (
      <View style={{flex:1,backgroundColor:"#fff"}}>
    <SignIn2/>
       {/* <AppNavigation/> */}
      </View>
    )
  }
}

const styles = StyleSheet.create({})

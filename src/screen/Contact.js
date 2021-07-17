import React, { Component } from 'react'
import { Text, StyleSheet, View,Button } from 'react-native'
import { colors } from '../assets/Theme'
export default class Contact extends Component {
    render() {
        return (
            <View style={{flex:1,backgroundColor:colors.green,justifyContent:"center",alignItems:"center"}}>
<Text>Contact</Text>
<Button
title="Home"
onPress={()=>this.props.navigation.navigate("Home", {params:{
    from:"ContactScreen",
    destination:"Home",
    message:"Hey Rahul , Good to go !! to Home"
}})}
/>
<Text>{JSON.stringify(this.props.route.params ? this.props.route.params : this.props.route.params )}</Text>
        </View>
        )
    }
}

const styles = StyleSheet.create({})

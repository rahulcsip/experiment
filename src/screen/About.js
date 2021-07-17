import React, { Component } from 'react'
import { Text, StyleSheet, View,Button } from 'react-native'
import { colors } from '../assets/Theme'
export default class About extends Component {
    render() {
        console.warn(this.props.route.params.params);
        return (
            <View style={{flex:1,backgroundColor:colors.green,justifyContent:"center",alignItems:"center"}}>
<Text>About</Text>
<Button
title="Contact"
onPress={()=>this.props.navigation.navigate("Contact",{params:{
    from:"AboutScreen",
    destination:"Contact",
    message:"Hey Rahul , Good to go !! , great"
}})}
/>
<Text>{JSON.stringify(this.props.route.params ? this.props.route.params : this.props.route.params )}</Text>

        </View>
        )
    }
}

const styles = StyleSheet.create({})

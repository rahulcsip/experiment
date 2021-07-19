import React, { Component } from 'react'
import { Text, StyleSheet, View ,Image} from 'react-native'
import {GoogleSigninButton,GoogleSignin,statusCodes} from '@react-native-google-signin/google-signin'


 // fist step google config

 GoogleSignin.configure({
     webClientId:'351164383988-m2cv75i75gjvmg25nd58dlkrv70c5or5.apps.googleusercontent.com',
     offlineAccess:true
 })

export default class SignIn extends Component {

   
    constructor(){
        super()
        this.state={
userInfo:{},
hasLoaded:false

        }

    }


    signIn=async()=>{

try {
    await GoogleSignin.hasPlayServices()
const userInfo = await GoogleSignin.signIn()

this.setState({userInfo,hasLoaded:true})
} catch (error) {
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      // user cancelled the login f0low
      console.log(error.message);
    } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log(error.message);
        // operation (e.g. sign in) is in progress already
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
        console.log(error.message);
    } else {
      // some other error happened
      console.log(error.message);
    }
    }}

    render() {
        return (
            <View style={{flex:1}}>
                <GoogleSigninButton
                onPress={this.signIn}

                />

{
    this.state.hasLoaded ? (
        <View >
<Text>{this.state.userInfo.user.name}</Text>
<Image
style={{height:100,width:100}}
source={{uri:this.state.userInfo.user.photo}}
/>
        </View>
    ):(<Text>Not SignIn</Text>)
}

            </View>
        )
    }
}

const styles = StyleSheet.create({})

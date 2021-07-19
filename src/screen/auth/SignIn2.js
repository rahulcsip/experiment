import React, { Component } from 'react'
import { Text, StyleSheet, View ,Image,Button} from 'react-native'
import {GoogleSigninButton,GoogleSignin,statusCodes} from '@react-native-google-signin/google-signin'
import auth from '@react-native-firebase/auth';

 // fist step google config



export default class SignIn2 extends Component {

   
    constructor(){
        super()
        this.state={
userInfo:{},
hasLoaded:false

        }

    }

async componentDidMount() {

    const firebaseConfig = {
        apiKey: "AIzaSyApvip0-YStKZMJ6ZT0RpEhQA8ykuZ_VI0",
        authDomain: "silicon-data-320121.firebaseapp.com",
        projectId: "silicon-data-320121",
        storageBucket: "silicon-data-320121.appspot.com",
        messagingSenderId: "84545636661",
        appId: "1:84545636661:web:10eaa854ee8eed6c21e47c",
        measurementId: "G-835245RREE"
      };
    GoogleSignin.configure({
        webClientId:'84545636661-ciju89733gc6vfice0lc51eusbo82ve7.apps.googleusercontent.com',
        offlineAccess:true
    })
}


     onGoogleButtonPress= async() =>{
        // Get the users ID token
        const { idToken } = await GoogleSignin.signIn();
      
        // Create a Google credential with the token
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      
        // Sign-in the user with the credential
        return auth().signInWithCredential(googleCredential);
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

                <Button
                title="google"
                onPress={()=>this.onGoogleButtonPress().then(() => console.log('Signed in with'))}
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

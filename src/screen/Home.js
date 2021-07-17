import React, { Component } from 'react'
import { Text, StyleSheet, View ,Button} from 'react-native'
import { colors } from '../assets/Theme'
import Icon from 'react-native-vector-icons/FontAwesome';
export default class Home extends Component {
    render() {
        console.warn(this.props.route.params );
        return (
            <View style={{flex:1,backgroundColor:colors.orange,justifyContent:"center",alignItems:"center"}}>
            <Text>About</Text>
            <Button
            title="About"
            onPress={()=>{
                this.props.navigation.navigate("About",{params:{
                from:"HomeScreen",
                destination:"About",
                message:"Hey Rahul , Good to go !!"
            }})
          
          //setting params
           // this.props.navigation.setParams({title:"pandey"})
        }}
            />

<Text>Setting</Text>
            <Button
            title="Setting"
            onPress={()=>{
                this.props.navigation.navigate("Setting",{params:{
                from:"HomeScreen",
                destination:"About",
                message:"Hey Rahul , Good to go !!"
            }})
          
          //setting params
           // this.props.navigation.setParams({title:"pandey"})
        }}
            />

<Text>Profile</Text>
            <Button
            title="Profile"
            onPress={()=>{
                this.props.navigation.navigate("Profile",{params:{
                from:"HomeScreen",
                destination:"About",
                message:"Hey Rahul , Good to go !!"
            }})
          
          //setting params
           // this.props.navigation.setParams({title:"pandey"})
        }}
            />


            <Text>{JSON.stringify(this.props.route.params ? this.props.route.params : this.props.route.params )}</Text>
                    </View>
        )
    }
}

const styles = StyleSheet.create({})

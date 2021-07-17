import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStack, createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Text, View, Button, Image } from 'react-native'
import Home from '../screen/Home'
import About from '../screen/About'
import Contact from '../screen/Contact'
import Profile from '../screen/Profile'
import Setting from '../screen/Setting'
import {createDrawerNavigator} from '@react-navigation/drawer'
import Icon from 'react-native-vector-icons/FontAwesome';





const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()
const Drawer = createDrawerNavigator()


const HomeStack = () => {
    return (
        <Stack.Navigator mode="modal"
            screenOptions={({ route, navigation }) => ({
                title: route.name,



            })}
            initialRouteName="Home"
        >
            <Stack.Screen name="Home" component={Home}
                options={({ route, navigation }) => ({
                    //  title:route.params.title,
                    //  headerStyle:{backgroundColor:"red"}

                })}
                initialParams={{ title: "Honeysingh" }} />
            <Stack.Screen name="About" component={About} />
            <Stack.Screen name="Contact" component={DrawerNavigation} />
        </Stack.Navigator>
    )
}



const ProfileStack = () => {
    return (
        <Stack.Navigator

        >
            <Stack.Screen name="Profile" component={Profile} />


        </Stack.Navigator>
    )
}


const SettingStack = () => {
    return (
        <Stack.Navigator

        >
            <Stack.Screen name="Setting" component={Setting} />


        </Stack.Navigator>
    )
}

//Drawer navigation

const DrawerNavigation = ()=>{

return(
    <Drawer.Navigator>
        <Drawer.Screen name="About" component={About}/>
        <Drawer.Screen name="Contact" component={Contact}/>
    </Drawer.Navigator>
)

}





// Main Navigation Container

const AppNavigation = () => {

    return (
        <NavigationContainer>
            <Tab.Navigator
        initialRouteName="Home"
        //lazy={true}
            tabBarOptions={{activeBackgroundColor:"yellow",inactiveBackgroundColor:"black"}}
                screenOptions={({ navigation, route }) => ({
                    // tabBarButton:,
                    tabBarIcon: ({ focused, size, color }) => {
                        let iconName
                        let iconSize
                        let iconColor
                        if (route.name === "Home") {
                            iconName = focused ? "home" : "chrome"
                            iconSize = focused ? 40 : 30
                            iconColor = focused ? "#00aaff" :"orange"
                        } else if (route.name === "Profile") {
                            iconName = focused ? "users" : "user-circle"
                            iconColor = focused ? "#00aaff" :"orange"
                            iconSize = focused ? 40 : 30
                        } else if (route.name === "Setting") {
                            iconName = focused ? "cog" : "cogs"
                            iconColor = focused ? "#00aaff" :"orange"
                            iconSize = focused ? 40 : 30
                        }

                        return (
                            <Icon
                                name={iconName}
                                color={iconColor}
                                size={iconSize}
                            />
                        )
                    },
                    tabBarBadge:1,
                tabBarBadgeStyle:{color:"greeen"}

                })}
            >
                <Tab.Screen name="Home" component={HomeStack} />
                <Tab.Screen name="Profile" component={ProfileStack} />
                <Tab.Screen name="Setting" component={SettingStack} />
            </Tab.Navigator>

        </NavigationContainer>
    )
}




export default AppNavigation
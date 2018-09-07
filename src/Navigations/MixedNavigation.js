import {createBottomTabNavigator,createDrawerNavigator,createStackNavigator} from 'react-navigation'
import{Image} from 'react-native'
import React from 'react'
//import { IconFontAwesome } from '@expo/vector-icons'
//import IconFontAwesome from 'react-native-vector-icons/FontAwesome'
import Screen1 from '../screens/Screen1'
import Screen2 from '../screens/Screen2'
import Screen3 from '../screens/Screen3'
import DrawerScreen from './DrawerScreen';

const Home=createStackNavigator({
    Home:{
        screen:Screen1,
        navigationOptions:()=>({
            title:'Home',
          tabBarIcon :({tintColor})=>{
              return(
                <Image
                source={require('../../images/icon-home.png')}
                style={{width: 30, height: 30,backgroundColor:tintColor}}>
            </Image>
              )
          }
        })
         
    },

},{
    headerMode:'none'
})
const Search=createStackNavigator({
    Search:{
        screen:Screen2,
        navigationOptions:()=>({
            title:'Search',
          tabBarIcon :({tintColor})=>{
              return(
                <Image
                source={require('../../images/icon-home.png')}
                style={{width: 30, height: 30,backgroundColor:tintColor}}>
            </Image>
              )
          }
        })
         
    },

} )

const TabNav=createBottomTabNavigator({
    TabHome:Home,
    TabSearch:Search,
 
    Screen3:{
        screen:Screen3,
         
    },
})
const StackTab=createStackNavigator({
    Tabs:TabNav
})
export default Drawer=createDrawerNavigator({
    Tabs:{
        screen:StackTab
    },   
},{
    contentComponent:props=><DrawerScreen {...props} />
})
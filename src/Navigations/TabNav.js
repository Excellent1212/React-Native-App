import {createBottomTabNavigator} from 'react-navigation'
import{Image} from 'react-native'
import React from 'react'
//import { IconFontAwesome } from '@expo/vector-icons'
//import IconFontAwesome from 'react-native-vector-icons/FontAwesome'
import Screen1 from '../screens/Screen1'
import Screen2 from '../screens/Screen2'
import Screen3 from '../screens/Screen3'

export default TabNav=createBottomTabNavigator({
    Screen1:{
        screen:Screen1,
        navigationOptions:()=>({
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
    Screen2:{
        screen:Screen2,
         
    },
    Screen3:{
        screen:Screen3,
         
    },
})
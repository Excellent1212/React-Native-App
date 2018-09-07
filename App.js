import React from 'react';
import {createBottomTabNavigator} from 'react-navigation'
import {Shop,Search,Cart,Wallet} from './components/screens'

const Tabs=createBottomTabNavigator({
  shop:Shop,
  search:Search,
  cart:Cart,
  wallet:Wallet
},  {
   
  tabBarOptions: {
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray',
  },
}
 )

export default class App extends React.Component {
  render() {
    return ( 
         <Tabs />           
    )
  }
}

  
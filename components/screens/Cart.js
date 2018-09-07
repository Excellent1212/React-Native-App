import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';

export default class Cart extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Cart',
    tabBarIcon: ({tintColor}) => {
      return(
        <Image
        source={require('../../images/icon-cart.jpg')}
        style={{width: 30, height: 30}} />
     
      )
     
    }
       
    
}
  render() {
    return (
      <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
          <Text>Cart is Empty</Text>
      </View>
    );
  }
}
/*
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
*/

 

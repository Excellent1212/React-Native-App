import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';

export default class Wallet extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Wallet',
    tabBarIcon: ({tintColor}) =>{
      return (
        <Image
            source={require('../../images/icon-wallet.png')}
            style={{width: 30, height: 30}}>
        </Image>
    )
    } 
}
  render() {
    return (
      <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
          <Text>Wallet</Text>
      </View>
    );
  }
}

 

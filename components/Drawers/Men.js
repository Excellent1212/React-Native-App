import React from 'react';
import { StyleSheet, Text, View,Image,Button } from 'react-native';


export default class Men extends React.Component {

render() {
    return (
      <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
          <Text>Men</Text>
          <Button 
          title='Go To Women'
          onPress={()=>this.props.navigation.navigate('Women')}
          />
      </View>
    );
  }
}
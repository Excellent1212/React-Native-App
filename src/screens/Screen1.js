import React from 'react';
import { StyleSheet, Text, View,Image,Button } from 'react-native';
import DrawerButton from '../Navigations/DrawerButton'


export default class Screen1 extends React.Component {

render() {
    return (
      <View style={{flex:1 }}>
          <DrawerButton {...this.props} />
          <Text>Screen1</Text>
          <Button 
          title='Go To Screen2'
          onPress={()=>this.props.navigation.navigate('Screen3')}
          />


      </View>
    );
  }
}
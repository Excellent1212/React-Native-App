import React from 'react';
import { StyleSheet, Text, View,Image,Button } from 'react-native';


export default class DrawerScreen extends React.Component {

render() {
    return (
        <View style={{flex:1 }}>
        
        <Text>Drawer</Text>
        <Button 
        title='Go To Screen2'
        onPress={()=>this.props.navigation.navigate('Screen3')}
        />
        </View>

    );
  }
}
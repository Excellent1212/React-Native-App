import React from 'react';
import { StyleSheet, Text, View,Image,TouchableHighlight} from 'react-native';


export default class Contact extends React.Component {

render() {
    return (
      <View 
      style={{
          height:90,
          flexDirection:'row',
          //alignItems:'center',
          justifyContent:'flex-start'}}>
          <TouchableHighlight 
          onPress={()=>{
            this.props.navigation.navigate('ContactUs')
          }
             }
          style={{marginLeft:170,marginTop:20}}>
          <Image 
          style={{width:25,height:25}}
          source={require('../../images/icon-contact.png')}
          />

          </TouchableHighlight>
      </View>
    );
  }
}